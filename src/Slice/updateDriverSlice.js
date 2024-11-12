// src/Slice/updateDriverSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const updateDriver = createAsyncThunk(
  'driver/updateDriver', 
  async (driverData, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:7000/driver/update/${driverData.driverId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(driverData.updatedData), 
      });
      if (!response.ok) {
        throw new Error('Failed to update driver');
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const updateDriverSlice = createSlice({
  name: 'updateDriver',
  initialState: {
    status: 'idle', 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateDriver.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateDriver.fulfilled, (state) => {
        state.status = 'succeeded';
        toast.success('Driver updated successfully!');
      })
      .addCase(updateDriver.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        toast.error(`Update failed: ${action.payload}`);
      });
  },
});

export default updateDriverSlice.reducer;
