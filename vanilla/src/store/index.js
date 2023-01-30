import Store from '@/core/Store';
import Repository from '@/core/Repository';

const repository = new Repository();
const STORAGE_KEY = 'todo';

export const SET_TODO_LIST = 'SET_TODO_LIST';

const initialState = {
  todoList: repository.get(STORAGE_KEY) || [],
};

const store = new Store({
  initialState,
  reducers: {
    [SET_TODO_LIST]: (state, items) => {
      state.todoList = items;
      repository.set(STORAGE_KEY, items);
    },
  },
});

export default store;