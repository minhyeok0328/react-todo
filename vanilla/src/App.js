import { addEvent } from '@/core/Render';
import store from '@/store';
import TodoItem from '@/components/TodoItem';
import { selector } from '@/utils';
import useTodoList from '@/hooks/useTodoList';

export default function App() {
  const { todoList } = store.state;
  const { patchTodoList } = useTodoList();

  function addTodoList() {
    const $input = selector('.add-input');
    const title = $input.value;

    if (!title.length) {
      alert('할 일을 입력해 주세요.');
      return;
    }

    patchTodoList({ title });
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