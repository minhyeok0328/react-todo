import Store from '@/core/Store';
import Repository from '@/core/Repository';

const repository = new Repository();
const STORAGE_KEY = 'todo';

export const PATCH_TODO_LIST = 'PATCH_TODO_LIST';

const initialState = {
  todoList: repository.get(STORAGE_KEY) || [],
};

const store = new Store({
  initialState,
  reducers: {
    [PATCH_TODO_LIST]: (state, items) => {
      state.todoList = items;
      repository.set(STORAGE_KEY, items);
    },
  },
});

export default store;