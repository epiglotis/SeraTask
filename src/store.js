// store.js
import { configureStore } from '@reduxjs/toolkit';
import DataSlice from './Reducers/DataSlice';


export const store = configureStore({
  reducer: {
    data: DataSlice,
  },
});
