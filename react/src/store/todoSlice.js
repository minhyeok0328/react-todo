import { createSlice } from '@reduxjs/toolkit';
import Repository from '@/@core/Repository';

const STORAGE_KEY = 'todo';
const initialState = {
  todoList: Repository.get(STORAGE_KEY) || [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodoList: (state, action) => {
      state.todoList.unshift({ ...action.payload });

      Repository.set(STORAGE_KEY, state.todoList);
    },
  },
});

export const { setTodoList } = todoSlice.actions;

export default todoSlice.reducer;