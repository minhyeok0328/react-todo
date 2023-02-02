import './App.css';
import useInput from '@/hooks/useInput';
import { generateRandomString } from '@/utils';
import { useSelector, useDispatch } from 'react-redux';
import { setTodoList } from '@/store/todoSlice';
import BaseInput from '@/components/BaseInput.jsx';
import TodoItem from "@/components/TodoItem.jsx";

function App() {
  const dispatch = useDispatch();
  const todoInput = useInput('');
  const todoList = useSelector((state) => state.todo.todoList);

  function addTodo() {
    const title = todoInput.value;
    if (!title.length) {
      alert('할 일을 입력해주세요.');
      return;
    }

    dispatch(setTodoList({
      index: generateRandomString(),
      title,
    }));

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
