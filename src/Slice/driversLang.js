import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; 

export const fetchDriverLanguages = createAsyncThunk(
  'driverLanguages/fetchAllLanguages',
  async () => {
    try {
      const response = await axios.get('http://localhost:7000/driver/getAllLang');
      return response.data; 
    } catch (error) {
      throw Error(error.response ? error.response.data.message : error.message); 
    }
  }
);

const initialState = {
languages: [],
  loading: false,
  error: null,
};

const driversSlice = createSlice({
  name: 'driverLanguages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDriverLanguages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDriverLanguages.fulfilled, (state, action) => {
        state.loading = false;
        state.languages = action.payload.data; 
      })
      .addCase(fetchDriverLanguages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; 
      });
  },
});

export default driversSlice.reducer;
