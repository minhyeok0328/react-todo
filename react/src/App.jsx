import './App.css';
import useInput from '@/hooks/useInput';
import { generateRandomString } from '@/utils';
import { useSelector, useDispatch } from 'react-redux';
import { setTodoList } from '@/store/todoSlice';
import { useRef } from 'react';

function App() {
  const dispatch = useDispatch();
  const todoInput = useInput('');
  const todoList = useSelector((state) => state.todo.todoList);
  const todoRef = useRef(null);

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
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <header>
        <input
          type="text"
          name="add"
          placeholder="할 일 추가"
          ref={todoRef}
          {...todoInput}
        />
        <button type="button" onClick={addTodo}>추가</button>
      </header>
      <main>
        {todoList.map((item, index) => (
          <article key={index}>
            test
            <button type="button">수정</button>
            <button type="button">삭제</button>
          </article>
        ))}
      </main>
    </div>
  );
}

export default App;
