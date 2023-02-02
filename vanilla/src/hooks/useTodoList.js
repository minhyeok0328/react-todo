import store, { PATCH_TODO_LIST } from '@/store';
import { generateRandomString } from '@/utils';

export default function useTodoList() {
  function patchTodoList({ index, title }) {
    const { todoList } = store.state;
    const newItems = todoList.map((item) => ({
      index: item.index,
      title: item.index === index ? title : item.title,
    }));

    if (!index) {
      newItems.push({
        index: generateRandomString(),
        title,
      });
    }

    store.dispatch({ type: PATCH_TODO_LIST, payload: newItems })
  }

  function removeTodoList(index) {
    const { todoList } = store.state;
    const newItems = todoList.filter((item) => item.index !== index);

    store.dispatch({ type: PATCH_TODO_LIST, payload: newItems });
  }

  return {
    patchTodoList,
    removeTodoList,
  };
}