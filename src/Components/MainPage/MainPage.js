import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  styled,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import SeraIcon from '../../Resources/SidebarIcons/sera-icon.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Reducers/DataSlice';
import SectorTabs from '../SectorTabs/SectorTabs';
import SensorChart from '../Chart/Chart';

const MainPage = () => {
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const [selectedData, setSelectedData] = useState({});

  const handleChange = (event) => {
    setSelectedData(event.target.value);
  };

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Box component='main' sx={{ flexGrow: 1, p: 3, marginLeft: 8 }}>
      <DrawerHeader />
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={SeraIcon}
            alt='seraIcon'
            style={{
              width: '3vh',
              height: '3vh',
              objectFit: 'contain',
              display: 'flex',
              alignItems: 'center',
            }}
          />
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: '#39C250',
              fontSize: 18,
              fontWeight: 500,
              letterSpacing: 0.02,
              marginLeft: '8px',
            }}
          >
            Sera
          </Typography>
        </Box>
        {data && (
          <FormControl sx={{ minWidth: 180, marginLeft: 3 }}>
            <InputLabel id='demo-simple-select-autowidth-label'>
              Ar-Ge Serası
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={selectedData}
              label='SelectedData'
              onChange={handleChange}
            >
              {data.length !== 0
                ? data?.map((value) => (
                    <MenuItem key={data.indexOf(value)} value={value}>
                      {value.greenhouse_name}
                    </MenuItem>
                  ))
                : null}
            </Select>
          </FormControl>
        )}
      </Box>
      {selectedData ? <SectorTabs dataArray={selectedData} /> : null}
      <SensorChart />
    </Box>
  );
};

export default MainPage;
