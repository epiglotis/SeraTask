// store.js
import { configureStore } from '@reduxjs/toolkit';
import DataSlice from './Reducers/DataSlice';
import SelectedSensorsSlice from './Reducers/SelectedSensorsSlice';


export const store = configureStore({
  reducer: {
    data: DataSlice,
    selectedSensors: SelectedSensorsSlice,
  },
});
