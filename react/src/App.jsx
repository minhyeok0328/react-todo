import './App.css';
import useInput from '@/hooks/useInput';
import BaseInput from '@/components/BaseInput.jsx';
import TodoItem from "@/components/TodoItem.jsx";
import useTodoList from '@/hooks/useTodoList';

function App() {
  const { todoList, createTodo } = useTodoList();
  const todoInput = useInput('');

  function addTodo() {
    const title = todoInput.value;

    if (!title.length) {
      alert('할 일을 입력해주세요.');
      return;
    }

    createTodo(title);
    todoInput.reset();
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <header>
        <BaseInput
          type="text"
          name="add"
          placeholder="할 일 추가"
          {...todoInput}
        />
        <button type="button" onClick={addTodo}>추가</button>
      </header>
      <main>
        {todoList.map((item, index) => (
          <TodoItem {...item} key={index} />
        ))}
      </main>
    </div>
  );
}

export default App;
