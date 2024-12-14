import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

// Create the Redux store
export const store = configureStore({
  reducer: {
    todo: todoReducer, // Add counter slice to the store
  },
});
