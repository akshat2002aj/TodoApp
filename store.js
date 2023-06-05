import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import TodoSlice from './features/todoSlice';

const store = configureStore({
  reducer: {
    todo: TodoSlice.reducer,
  },
});

export default store;
