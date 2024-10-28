// vehicleSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

// Async thunk to add a new vehicle
export const addVehicle = createAsyncThunk('vehicles/addVehicle', async (vehicleData, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:7000/vechicle/add', vehicleData);
    toast.success('Vehicle added successfully!');
    return response.data;
  } catch (error) {
    toast.error('Failed to add vehicle.');
    return rejectWithValue(error.response?.data || 'Something went wrong');
  }
});

const vehicleSlice = createSlice({
  name: 'vehicles',
  initialState: {
    vehicles: [],
    error: null,
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addVehicle.fulfilled, (state, action) => {
        state.vehicles.push(action.payload);
        state.error = null;
      })
      .addCase(addVehicle.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default vehicleSlice.reducer;
