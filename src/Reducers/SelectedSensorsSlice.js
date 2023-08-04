import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = [];

const selectedSensorsSlice = createSlice({
  name: 'selectedSensors',
  initialState,
  reducers: {
    addSensor: (state, action) => {
      const sensor = action.payload;
      if (!state.some((selectedSensor) => selectedSensor.sensor_name === sensor.sensor_name)) {
        state.push(sensor);
      }
    },
    removeSensor: (state, action) => {
      const sensorName = action.payload.sensor_name;
      return state.filter((selectedSensor) => selectedSensor.sensor_name !== sensorName);
    },
  },
});

export const { addSensor, removeSensor } = selectedSensorsSlice.actions;

// Create a custom selector to get the selected sensors
const selectedSensorsSelector = (state) => state.selectedSensors;
export const selectSelectedSensors = createSelector(
  [selectedSensorsSelector],
  (selectedSensors) => selectedSensors
);

export default selectedSensorsSlice.reducer;
