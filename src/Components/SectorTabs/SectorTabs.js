import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SensorBubbles from '../SectorBubbles/SensorBubbles';

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    console.log(dataArray);
  }, [dataArray]);

  if (!dataArray || !dataArray.sektors) {
    return null;
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
          sx={{ color: '#39C250' }}
        >
          {dataArray?.sektors.map((sektor, index) => (
            <Tab
              key={index}
              label={sektor.sektor_name}
              {...a11yProps(index)}
              sx={{ color: 'inherit', backgroundColor: 'inherit' }}
            />
          ))}
          <Tab label='Favoriler' />
        </Tabs>
      </Box>
      {dataArray?.sektors.map((sektor, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {Array.isArray(sektor.sensor_list) ? (
            // If sektor is an array, map over it
            sektor.sensor_list.map((sensorList, index) => (
              <SensorBubbles key={index} sensors={sensorList} />
            ))
          ) : (
            // If sektor is an object, directly render the component
            <SensorBubbles key={index} sensors={sektor.sensor_list} />
          )}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
