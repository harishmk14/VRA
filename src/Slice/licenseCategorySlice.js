// src/features/licenseCategorySlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLicenseCategory = createAsyncThunk(
  'licenseCategory/fetchLicenseCategory',
  async () => {
    const response = await axios.get('http://localhost:7000/driver/getall/DLC');
    return response.data;
  }
);

const licenseCategorySlice = createSlice({
  name: 'licenseCategory',
  initialState: {
    data: [],
    status: 'idle', 
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLicenseCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLicenseCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.data;
      })
      .addCase(fetchLicenseCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default licenseCategorySlice.reducer;
