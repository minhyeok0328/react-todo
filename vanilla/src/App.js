import { addEvent } from '@/core/Render';
import store, { SET_TODO_LIST } from '@/store';
import TodoItem from '@/components/TodoItem';
import { generateRandomString, selector } from '@/utils';

export default function App() {
  const { todoList } = store.state;

  function addTodoList() {
    const { todoList } = store.state;
    const $input = selector('.add-input');
    const title = $input.value;

    if (!title.length) {
      alert('할 일을 입력해 주세요.');
      return;
    }

    const items = [
      ...todoList,
      {
        index: generateRandomString(),
        title,
      }
    ];

    store.dispatch({ type: SET_TODO_LIST, payload: items });
  }

  addEvent('click', '.add', addTodoList);

  return `
    <header>
      Todo List
      <nav>
        <input type="text" name="todolist" class="add-input" placeholder="add todo list" />
        <button type="button" class="add">추가</button>
      </nav>
    </header>
    <main>
      <section class="todo">
        <ul>
          ${todoList.map((item) => (TodoItem(item))).join('')}
        </ul>
      </section>
    </main>
  `;
}