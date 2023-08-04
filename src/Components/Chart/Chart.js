import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from 'recharts';
import { selectSelectedSensors } from '../../Reducers/SelectedSensorsSlice';

export default function SensorChart() {
  // Access the selectedSensors from Redux store using useSelector
  const selectedSensors = useSelector(selectSelectedSensors);

  return (
    <Box>
      <LineChart
        width={500}
        height={300}
        data={selectedSensors[0]?.daily || []} // Use the daily data from the first sensor as the initial data
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <Tooltip />
        <Legend />
        {selectedSensors.map((sensor) => (
          <Line
            key={sensor.id} // Assuming you have an 'id' property for each sensor
            yAxisId='left'
            type='monotone'
            dataKey='min' // Replace 'min' with the appropriate key for your data
            data={sensor.daily || []} // Use the daily data for each sensor as 'data'
            stroke='#8884d8' // You can use a different color for each line if needed
            activeDot={{ r: 8 }}
          />
        ))}
        {/* Add the custom label on the right side of the chart */}
        <Label
          value='Custom Label'
          position='right'
          offset={5}
          angle={-90}
          style={{ textAnchor: 'middle', fontSize: '12px' }}
        />
      </LineChart>
    </Box>
  );
}
