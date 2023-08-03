import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Heat from '../../Resources/SidebarIcons/avatar.png';

const SensorBubbles = (props) => {

    const sensors = props;
    useEffect(()=>{
      console.log(sensors)
    },[sensors])

  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Box
        position='relative'
        border='1px solid #ccc'
        borderRadius='8px'
        padding='10px'
        bgcolor='#f0f0f0'
        minWidth='fit-content'
        display='flex'
        flexDirection='column'
        alignItems='left'
      >
        <Typography variant='body2' component='p' sx={{ margin: 0 }}>
          {sensors.sensor_name}
        </Typography>
        <Box display='flex' alignItems='center' justifyContent='flex-start'>
          <img
            src={Heat}
            alt='logo'
            style={{
              width: '1em',
              height: '1em',
              objectFit: 'contain',
              marginRight: '10px',
            }}
          />
          <Typography variant='body2' component='p' sx={{ margin: 0 }}>
            Sektör 1
          </Typography>
        </Box>
        <img
          src={Heat}
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
  );
};

export default SensorBubbles;
