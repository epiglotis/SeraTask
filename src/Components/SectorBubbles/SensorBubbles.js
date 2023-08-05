import { Box, Typography, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Heat from '../../Resources/SidebarIcons/avatar.png';
import AirTemperatureIcon from '../../Resources/SidebarIcons/air_temperature.png';
import AirHumidityIcon from '../../Resources/SidebarIcons/air_humidity.png';
import ShowChartIcon from '../../Resources/SidebarIcons/show-chart-icon.png';
import ShowChartIconSelected from '../../Resources/SidebarIcons/show-chart-icon-selected.png';
import ECIcon from '../../Resources/SidebarIcons/bolt-solid.svg';
import PHIcon from '../../Resources/SidebarIcons/droplet-solid.svg';
import RadIcon from '../../Resources/SidebarIcons/radiation-solid.svg';
import ParIcon from '../../Resources/SidebarIcons/x-ray-solid.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addSensor, removeSensor, selectSelectedSensors } from '../../Reducers/SelectedSensorsSlice';

const SensorBubbles = (props) => {
  const sektor = props;
  const dispatch = useDispatch();
  const selectedSensors = useSelector(selectSelectedSensors);

  useEffect(()=>{
    console.log(selectedSensors)
  },[selectedSensors])


  const handleClick = (sensor) => {
    if (selectedSensors.includes(sensor)) {
      dispatch(removeSensor(sensor)); // Dispatching the removeSensor action object
      console.log(sensor);
    } else {
      
      dispatch(addSensor(sensor)); // Dispatching the addSensor action object
    }
  };

  useEffect(() => {
    console.log(sektor);
  }, [sektor]);

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

  return (
    <>
      {sektor.sektor.sensor_list.map((sensor, index) => (
        <Box
          key={index}
          onClick={() => handleClick(sensor)}
          display='flex'
          flexDirection='column'
          alignItems='center'
          marginBottom='1rem'
        >
          <Box
            position='relative'
            border='1px solid #ccc'
            borderRadius='8px'
            padding='10px'
            boxShadow={
              selectedSensors.includes(sensor)
                ? '0 4px 8px 0 rgba(57, 194, 80, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                : '0'
            }
            width='150px'
            display='flex'
            flexDirection='column'
            alignItems='left'
            sx={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
            }}
          >
            <Typography variant='body2' component='p' sx={{ margin: 0 }}>
              {sektor.sektor.sektor_name}
            </Typography>
            <Box display='flex' alignItems='center' justifyContent='flex-start'>
              {getSensorIcon(sensor.sensor_type)}
              <Tooltip title={sensor.sensor_name}>
                <Typography
                  variant='body2'
                  component='p'
                  sx={{
                    margin: 0,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {sensor.sensor_name}
                </Typography>
              </Tooltip>
            </Box>
            <img
              src={
                selectedSensors.includes(sensor)
                  ? ShowChartIconSelected
                  : ShowChartIcon
              }
              alt='logo'
              style={{
                position: 'absolute',
                top: 5,
                right: 5,
                width: '1em',
                height: '1em',
                objectFit: 'contain',
                zIndex: 1,
              }}
            />
          </Box>
        </Box>
      ))}
    </>
  );
};

export default SensorBubbles;
