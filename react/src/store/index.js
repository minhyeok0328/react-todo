import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '@/store/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

export default store;