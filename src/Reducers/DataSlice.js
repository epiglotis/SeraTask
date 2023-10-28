// dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch data
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get('http://localhost:3001/api/data');
  console.log(response);
  return response.data;
});

// Redux slice
const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    selectedData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.selectedData = action.payload[0];
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

// Export the reducer
export default dataSlice.reducer;
