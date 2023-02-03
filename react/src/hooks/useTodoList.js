import { useDispatch, useSelector } from 'react-redux';
import { setItem, updateItem, removeItem } from '@/store/todoSlice';
import { generateRandomString } from '@/utils';

export default function useTodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);

  function createTodo(title = '') {
    dispatch(
      setItem({
        index: generateRandomString(),
        title,
      })
    )
  }
  
  function updateTodo({ index, title }) {
    dispatch(
      updateItem({
        index,
        title,
      })
    );
  }
  
  function removeTodo(index) {
    dispatch(removeItem(index));
  }
  
  return {
    todoList,
    createTodo,
    updateTodo,
    removeTodo,
  };
}