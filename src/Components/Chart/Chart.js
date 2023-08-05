import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
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
  Label,
} from 'recharts';
import { selectSelectedSensors } from '../../Reducers/SelectedSensorsSlice';
import Heat from '../../Resources/SidebarIcons/avatar.png';
import AirTemperatureIcon from '../../Resources/SidebarIcons/air_temperature.png';
import AirHumidityIcon from '../../Resources/SidebarIcons/air_humidity.png';
import ECIcon from '../../Resources/SidebarIcons/bolt-solid.svg';
import PHIcon from '../../Resources/SidebarIcons/droplet-solid.svg';
import RadIcon from '../../Resources/SidebarIcons/radiation-solid.svg';
import ParIcon from '../../Resources/SidebarIcons/x-ray-solid.svg';

export default function SensorChart() {
  const selectedSensors = useSelector(selectSelectedSensors);

  const [selectedDateTypeOption, setSelectedDateTypeOption] = useState('daily');
  const [selectedValueTypeOption, setSelectedValueTypeOption] = useState('avg');

  const [startDate, setStartDate] = useState(null); // State variable for start date
  const [endDate, setEndDate] = useState(null); // State variable for end date

  const handleDateTypeChange = (event) => {
    setSelectedDateTypeOption(event.target.value);
  };
  const handleValueTypeChange = (event) => {
    setSelectedValueTypeOption(event.target.value);
  };
  const handleStartDateChange = (event) => {
    setStartDate(new Date(event.target.value));
  };

  const handleEndDateChange = (event) => {
    setEndDate(new Date(event.target.value));
  };

  const getSensorIcon = (sensorName) => {
    const iconSize = '1em'; // Set a fixed height for the icons
    switch (sensorName) {
      case 'Hava Sıcaklığı':
        return (
          <img
            src={AirTemperatureIcon}
            alt='logo'
            style={{
              width: iconSize,
              height: iconSize,
              objectFit: 'contain',
              marginRight: '10px',
            }}
          />
        );
      case 'Hava Nemi':
        return (
          <img
            src={AirHumidityIcon}
            alt='logo'
            style={{
              width: iconSize,
              height: iconSize,
              objectFit: 'contain',
              marginRight: '10px',
            }}
          />
        );
      case 'EC':
        return (
          <img
            src={ECIcon}
            alt='logo'
            style={{
              width: iconSize,
              height: iconSize,
              objectFit: 'contain',
              marginRight: '10px',
            }}
          />
        );
      case 'pH':
        return (
          <img
            src={PHIcon}
            alt='logo'
            style={{
              width: iconSize,
              height: iconSize,
              objectFit: 'contain',
              marginRight: '10px',
            }}
          />
        );
      case 'PAR':
        return (
          <img
            src={ParIcon}
            alt='logo'
            style={{
              width: iconSize,
              height: iconSize,
              objectFit: 'contain',
              marginRight: '10px',
            }}
          />
        );
      case 'Toplam Radyasyon':
        return (
          <img
            src={RadIcon}
            alt='logo'
            style={{
              width: iconSize,
              height: iconSize,
              objectFit: 'contain',
              marginRight: '10px',
            }}
          />
        );
      default:
        return (
          <img
            src={Heat}
            alt='logo'
            style={{
              width: iconSize,
              height: iconSize,
              objectFit: 'contain',
              marginRight: '10px',
            }}
          />
        ); // Default icon if the sensor name does not match any of the above cases
    }
  };

  const monthMap = {
    Ocak: '01',
    Şubat: '02',
    Mart: '03',
    Nisan: '04',
    Mayıs: '05',
    Haziran: '06',
    Temmuz: '07',
    Ağustos: '08',
    Eylül: '09',
    Ekim: '10',
    Kasım: '11',
    Aralık: '12',
  };

  // Function to get the selected data based on the selectedOption for a specific sensor
  const getSelectedDataForSensor = (sensor) => {
    switch (selectedDateTypeOption) {
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

  const getSelectedValueTypeForSensor = (sensorData) => {
    switch (selectedValueTypeOption) {
      case 'min':
        return sensorData.min || null;
      case 'avg':
        return sensorData.avg || null;
      case 'max':
        return sensorData.max || null;
      default:
        return null;
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

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split(' ');
    // Assuming your date format is "01 Mayıs 23", convert it to "2023-05-01" for Date parsing
    const formattedDate = `${year < 2000 ? '20' : '19'}${year}-${
      monthMap[month]
    }-${day}`;
    return new Date(formattedDate);
  };

  // Function to generate an object that contains each sensor's data for each date
  const generateChartData = () => {
    const allDates = getAllDates();
    const chartData = allDates.map((date) => {
      const currentDate = parseDate(date);

      if (
        (startDate && currentDate < startDate) || // Filter out dates before the selected start date
        (endDate && currentDate > endDate) // Filter out dates after the selected end date
      ) {
        return null; // Return null for dates outside the selected range
      }

      const dataObject = { date };
      selectedSensors.forEach((sensor) => {
        const data = getSelectedDataForSensor(sensor);
        const sensorData = data.find((entry) => entry.date === date);
        if (sensorData) {
          dataObject[sensor.sensor_name] =
            getSelectedValueTypeForSensor(sensorData);
        } else {
          dataObject[sensor.sensor_name] = null; // Use null if data is not available for a date
        }
      });
      return dataObject;
    });

    // Filter out null values from the chartData array
    return chartData.filter((dataObject) => dataObject !== null);
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

  const isMobile = useMediaQuery('(min-width:1200px)')

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile?'row':"column",
        backgroundColor: '#FFFFFF',
        marginTop:"30px",
        paddingBottom:"30px",
        paddingTop:"10px"
      }}
    >
      <LineChart
        width=  {isMobile ? 900:700}
        height={400}
        data={generateChartData()} // Use the generated chart data
        margin={{
          top: 40, // Adjust top margin to make space for the SelectBox
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' angle={-45} dx={10} dy={10} height={50} fontSize={10} />
        <YAxis yAxisId='left'>
          <Label
            value='Hava Sıcaklığı C°'
            position='insideLeft'
            angle={-90}
            style={{ textAnchor: 'middle', fill: '#888' }}
          />
        </YAxis>
        <YAxis yAxisId='right' orientation='right'>
          <Label
            value='Right Label'
            position='insideRight'
            angle={-90}
            style={{ textAnchor: 'middle', fill: '#888' }}
          />
        </YAxis>
        <Tooltip />
        {selectedSensors.map((sensor, index) => (
          <Line
            key={sensor.sensor_name}
            yAxisId='left'
            type='monotone'
            dataKey={sensor.sensor_name} // Use the sensor_name as the dataKey for each sensor
            stroke={lineColors[index % lineColors.length]} // Use a different color for each line
            strokeWidth={3} // Set the thickness of the lines (you can adjust this value as needed)
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf:"center",justifyContent: 'flex-end', flex: 1, }}>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <FormControl variant='outlined' sx={{ flex: '1' }}>
            <InputLabel id='select-label' variant='outlined' >Veri Tipi</InputLabel>
            <Select
              labelId='select-label'
              id='select-date-type'
              value={selectedDateTypeOption}
              onChange={handleDateTypeChange}
              label='Veri Tipi'
            >
              <MenuItem value='minutely'>Dakikalık</MenuItem>
              <MenuItem value='daily'>Günlük</MenuItem>
              <MenuItem value='weekly'>Haftalık</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant='outlined'
            sx={{ marginLeft: '1rem', flex: '1' }}
          >
            <InputLabel id='value-type-label'>Veri Türü</InputLabel>
            <Select
              labelId='value-type-label'
              id='select-value-type'
              value={selectedValueTypeOption}
              onChange={handleValueTypeChange}
              label='Veri Türü'
            >
              <MenuItem value='min'>Minimum</MenuItem>
              <MenuItem value='avg'>Ortalama</MenuItem>
              <MenuItem value='max'>Maximum</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', marginTop: '1rem' }}>
          <TextField
            id='start-date'
            label='Başlangıç'
            type='date'
            value={startDate ? startDate.toISOString().slice(0, 10) : ''}
            onChange={handleStartDateChange}
            sx={{ flex: 1 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id='end-date'
            label='Bitiş'
            type='date'
            value={endDate ? endDate.toISOString().slice(0, 10) : ''}
            onChange={handleEndDateChange}
            sx={{ flex: 1, marginLeft: '1rem' }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Box sx={{ marginTop: '1rem' }}>
          <Typography>Sensörler:</Typography>
          <Box sx={{border: '0.75px solid #D9D9D9',minHeight:150}}>
          {selectedSensors.map((sensor,index) => (
            <Box
            key={sensor.sensor_name}
            sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}
          >
            <div
              style={{
                width: '20px',
                borderBottom: `2px solid ${lineColors[index % lineColors.length]}`,
                marginRight: '8px',
              }}
            />
            
            <span>{getSensorIcon(sensor.sensor_type)}{sensor.sensor_name}</span>
          </Box>
          ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
