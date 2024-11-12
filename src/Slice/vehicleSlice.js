// vehicleSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';


export const addVehicle = createAsyncThunk(
  'vehicles/addVehicle',
  async (vehicleData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:7000/vechicle/add', vehicleData);
      toast.success('Vehicle added successfully!');
      return response.data;
    } catch (error) {
      toast.error('Failed to add vehicle.');
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);


export const fetchAllVehicles = createAsyncThunk(
  'vehicles/fetchAllVehicles',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:7000/vechicle/getAll');
      return response.data;
    } catch (error) {
      toast.error('Failed to fetch vehicles.');
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

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

      .addCase(addVehicle.fulfilled, (state) => {
            state.status = 'succeeded';
      })
      .addCase(addVehicle.rejected, (state) => {
        state.status = 'failed';
      })

      .addCase(fetchAllVehicles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllVehicles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.vehicles = action.payload;
        state.error = null;
      })
      .addCase(fetchAllVehicles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default vehicleSlice.reducer;
