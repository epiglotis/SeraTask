import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SensorBubbles from '../SectorBubbles/SensorBubbles';
import SensorLogo from '../../Resources/SidebarIcons/sensor-logo.png';
import favIcon from '../../Resources/SidebarIcons/favIcon.png';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SectorTabs({ dataArray }) {
  const [value, setValue] = React.useState(-1);
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleChange = (event, newValue) => {
    // If the "Tümü" tab is selected, set the value to a special number, e.g., -1
    setValue(newValue === -1 ? -1 : newValue);
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  React.useEffect(() => {
    console.log(dataArray);
  }, [dataArray]);

  if (!dataArray || !dataArray.sektors) {
    return null;
  }

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} sx={{ color: '#39C250' }}>
          <Tab
            value={-1}
            key={-1}
            label={'Tümü'}
            sx={{
              color: 'inherit',
              backgroundColor: 'inherit',
              borderBottom: value === -1 ? '2px solid #39C250' : 'none',
            }}
          ></Tab>
          {dataArray?.sektors.map((sektor, index) => (
            <Tab
              key={index}
              value={index}
              label={sektor.sektor_name}
              {...a11yProps(index)}
              sx={{
                color: 'inherit',
                backgroundColor: 'inherit',
                borderBottom: value === index ? '2px solid #39C250' : 'none',
              }}
            />
          ))}
          <Tab
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <img src={favIcon} alt='FavIcon' />
                <Typography variant='body1'>Favoriler</Typography>{' '}
                {/* The text */}
              </Box>
            }
            sx={{ color: '#F9BA00' }} // You can still set the color for this specific tab if needed
          />
        </Tabs>
      </Box>
      <Box
        sx={{
          backgroundColor: '#FFFFFF',
          borderRadius: '4px',
          borderWidth: '1px',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '-20px',
            marginLeft: '8px'
          }}
        >
          <img src={SensorLogo} alt='SensorLogo' />
          <Typography sx={{ fontWeight: 'bold', marginLeft: '8px' }}>
            Sensörler
          </Typography>
          <Box sx={{ p: 2, marginLeft: 'auto' }}>
            <input
              type='text'
              placeholder='Sensör Ara'
              value={searchQuery}
              onChange={handleSearchChange}
              style={{
                width: '100%',
                padding: '8px',
                fontSize: '16px',
                borderRadius: '4px',
                borderWidth: '1px',
              }}
            />
          </Box>
        </Box>
        <CustomTabPanel value={value} index={-1}>
          {/* If the "Tümü" tab is selected, show all sektors and all sensors */}
          <Box
            sx={{
              overflowY: 'auto',
              maxHeight: '180px',
              '&::-webkit-scrollbar': {
                width: '8px', // Set the width of the scrollbar
              },
              '&::-webkit-scrollbar-track': {
                background: '#f1f1f1', // Set the background color of the scrollbar track
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#888', // Set the color of the scrollbar thumb
                borderRadius: '4px', // Add some border-radius to make the thumb rounder
              },
              backgroundColor: '#FFFFFF',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              {dataArray?.sektors.map((sektor, index) =>
                Array.isArray(sektor) ? (
                  // If sektor is an array, map over it and show all sensors
                  sektor.map((sektor, index) => (
                    <SensorBubbles key={index} sektor={sektor}  searchQuery={searchQuery}  />
                  ))
                ) : (
                  // If sektor is an object, directly render the component to show all sensors
                  <SensorBubbles key={index} sektor={sektor}  searchQuery={searchQuery} />
                )
              )}
            </Box>
          </Box>
        </CustomTabPanel>
        {dataArray?.sektors.map((sektor, index) => (
          <CustomTabPanel key={index} value={value} index={index}>
          <Box sx={{ overflowY: 'auto', maxHeight: '180px' }}>
            <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {/* If any tab other than "Tümü" is selected, show specific sektor */}
              {Array.isArray(sektor) ? (
                // If sektor is an array, map over it and show its sensors
                sektor.map((sensor, index) => (
                  <SensorBubbles key={index} sektor={sensor} searchQuery={searchQuery}/>
                ))
              ) : (
                // If sektor is an object, directly render the component to show its sensors
                <SensorBubbles key={index} sektor={sektor} searchQuery={searchQuery}/>
              )}
            </Box>
          </Box>
        </CustomTabPanel>
        ))}
      </Box>
    </Box>
  );
}
