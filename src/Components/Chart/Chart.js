import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { selectSelectedSensors } from '../../Reducers/SelectedSensorsSlice';

export default function SensorChart() {
  const selectedSensors = useSelector(selectSelectedSensors);

  const [selectedOption, setSelectedOption] = useState('daily');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Function to get the selected data based on the selectedOption for a specific sensor
  const getSelectedDataForSensor = (sensor) => {
    switch (selectedOption) {
      case 'minutely':
        return sensor.minutely || [];
      case 'daily':
        return sensor.daily || [];
      case 'weekly':
        return sensor.weekly || [];
      default:
        return sensor.daily || [];
    }
  };

  // Function to get all unique dates from all sensors
  const getAllDates = () => {
    const allDates = new Set();
    selectedSensors.forEach((sensor) => {
      const data = getSelectedDataForSensor(sensor);
      data.forEach((entry) => allDates.add(entry.date));
    });
    return Array.from(allDates);
  };

  // Function to generate an object that contains each sensor's data for each date
  const generateChartData = () => {
    const allDates = getAllDates();
    const chartData = allDates.map((date) => {
      const dataObject = { date };
      selectedSensors.forEach((sensor) => {
        const data = getSelectedDataForSensor(sensor);
        const sensorData = data.find((entry) => entry.date === date);
        if (sensorData) {
          dataObject[sensor.sensor_name] = sensorData.avg;
        } else {
          dataObject[sensor.sensor_name] = null; // Use null if data is not available for a date
        }
      });
      return dataObject;
    });
    return chartData;
  };

  // Create an array of colors for lines
  const lineColors = [
    '#8884d8',
    '#82ca9d',
    '#ffc658',
    '#FF5733',
    '#FF33FF',
    '#33FFDD',
  ];

  return (
    <Box>
      <Box>
        <FormControl fullWidth variant='outlined'>
          <InputLabel id='select-label'>Select Option</InputLabel>
          <Select
            labelId='select-label'
            id='select'
            value={selectedOption}
            onChange={handleChange}
            label='Select Option'
          >
            <MenuItem value='minutely'>Minutely</MenuItem>
            <MenuItem value='daily'>Daily</MenuItem>
            <MenuItem value='weekly'>Weekly</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <LineChart
        width={800}
        height={300}
        data={generateChartData()} // Use the generated chart data
        margin={{
          top: 40, // Adjust top margin to make space for the SelectBox
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' angle={-45} dx={10} dy={10} height={30} />
        <YAxis yAxisId='left' />
        <Tooltip />
        <Legend />
        {selectedSensors.map((sensor, index) => (
          <Line
            key={sensor.sensor_name}
            yAxisId='left'
            type='monotone'
            dataKey={sensor.sensor_name} // Use the sensor_name as the dataKey for each sensor
            stroke={lineColors[index % lineColors.length]} // Use a different color for each line
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
    </Box>
  );
}
