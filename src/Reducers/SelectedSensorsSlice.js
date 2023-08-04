import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = [];

const selectedSensorsSlice = createSlice({
  name: 'selectedSensors',
  initialState,
  reducers: {
    addSensor: (state, action) => {
      const sensor = action.payload;
      if (!state.includes(sensor)) {
        state.push(sensor);
      }
    },
    removeSensor: (state, action) => {
      const sensor = action.payload;
      console.log(sensor)
      const a = state.filter((selectedSensor) => selectedSensor !== sensor);
      console.log(a);
      return a;
    },
  },
});

export const { addSensor, removeSensor } = selectedSensorsSlice.actions;

// Create a custom equality function to ensure component re-renders when state is updated
const selectedSensorsSelector = (state) => state.selectedSensors;
export const selectSelectedSensors = createSelector(
  [selectedSensorsSelector],
  (selectedSensors) => selectedSensors
);

export default selectedSensorsSlice.reducer;
