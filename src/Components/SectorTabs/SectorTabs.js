import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SensorBubbles from '../SectorBubbles/SensorBubbles';
import SensorChart from '../Chart/Chart';

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
    setSearchQuery(event.target.value);
  };

  React.useEffect(() => {
    console.log(dataArray);
  }, [dataArray]);

  if (!dataArray || !dataArray.sektors) {
    return null;
  }

  return (
    <Box sx={{ width: '100%' }}>
      {/* Add the search box */}
      <Box sx={{ p: 2 }}>
        <input
          type='text'
          placeholder='Search sensors...'
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ width: '100%', padding: '8px', fontSize: '16px' }}
        />
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
          sx={{ color: '#39C250' }}
        >
          <Tab value={-1} key={-1} label={"Tümü"} sx={{ color: 'inherit', backgroundColor: 'inherit',borderBottom: value === -1 ? '2px solid #39C250':"none" }}></Tab>
          {dataArray?.sektors.map((sektor, index) => (
            <Tab
              key={index}
              value={index}
              label={sektor.sektor_name}
              {...a11yProps(index)}
              sx={{ color: 'inherit', backgroundColor: 'inherit', borderBottom: value === index ? '2px solid #39C250':"none", }}
            />
          ))}
          <Tab label='Favoriler' />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={-1}>
        {/* If the "Tümü" tab is selected, show all sektors and all sensors */}
        <Box sx={{ overflowY: 'auto', maxHeight: '180px' }}>
          <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {dataArray?.sektors.map((sektor, index) =>
              Array.isArray(sektor) ? (
                // If sektor is an array, map over it and show all sensors
                sektor.map((sektor, index) => (
                  <SensorBubbles key={index} sektor={sektor} />
                ))
              ) : (
                // If sektor is an object, directly render the component to show all sensors
                <SensorBubbles key={index} sektor={sektor} />
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
              // If sektor is an array, map over it and show its sensors that match the search query
              <Box sx={{ overflowY: 'auto', maxHeight: '400px' }}>
                {sektor
                  .filter((sensor) =>
                    sensor?.sensor_name?.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((sensor, index) => <SensorBubbles key={index} sektor={sensor} />)
                }
              </Box>
            ) : (
              // If sektor is an object, directly render the component to show its sensors
              (sektor?.sensor_name?.toLowerCase().includes(searchQuery.toLowerCase())) && (
                <SensorBubbles key={index} sektor={sektor} />
              )
            )}
          </Box>
        </Box>
      </CustomTabPanel>
      ))}

      
    </Box>
  );
}
