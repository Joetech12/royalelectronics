import { configureStore } from '@reduxjs/toolkit';
import dropReducer from './slices/dropSlice';

export const store = configureStore({

  reducer: {
    drop: dropReducer
  },
});
