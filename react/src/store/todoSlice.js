import { createSlice } from '@reduxjs/toolkit';
import Repository from '@/@core/Repository';

const STORAGE_KEY = 'todo';
const initialState = {
  todoList: Repository.get(STORAGE_KEY) || [],
};

const saveLocalStorage = (items) => Repository.set(STORAGE_KEY, items);

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.todoList.unshift({ ...action.payload });

      saveLocalStorage(state.todoList);
    },
    updateItem(state, action) {
      const { index, title } = action.payload;

      state.todoList = state.todoList.map((item) => ({
        ...item,
        title: item.index === index ? title : item.title,
      }));

      saveLocalStorage(state.todoList);
    },
    removeItem(state, action) {
      state.todoList = state.todoList.filter(({ index }) => index !== action.payload);
      
      saveLocalStorage(state.todoList);
    },
  },
});

export const { setItem, updateItem, removeItem } = todoSlice.actions;

export default todoSlice.reducer;