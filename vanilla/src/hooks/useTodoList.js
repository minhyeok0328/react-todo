import store, { SET_TODO_LIST } from '@/store';

export default function useTodoList() {
  function patchTodoList({ index, title }) {
    const { todoList } = store.state;
    const findTodo = todoList.filter((item) => item.index === index).length;
    const data = todoList.map((item) => ({
      index: item.index,
      title: item.index === index ? title : item.title,
    }));

    if (!findTodo) {
      data.push({ index, title });
    }

    store.dispatch({ type: SET_TODO_LIST, payload: data })
  }

  return {
    patchTodoList,
  };
}