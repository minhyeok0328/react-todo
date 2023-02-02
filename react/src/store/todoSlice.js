import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodoList: (state, action) => {
      state.todoList = [
        ...state.todoList,
        { ...action.payload },
      ];
    },
  },
});

export const { setTodoList } = todoSlice.actions;

export default todoSlice.reducer;