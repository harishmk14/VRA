import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; 
import { toast } from 'react-toastify';

export const deleteVehicle = createAsyncThunk(
  'vehicles/deleteVehicle',
  async (vehicleId) => {
    const response = await axios.delete(`http://localhost:7000/vechicle/delete/${vehicleId}`);
    toast.success('Vehicle Deleted successfully!');
    
    if (response.status !== 200) {
      toast.error('Failed to Delete vehicle.');
      throw new Error('Failed to delete vehicle'); 
    }

    return vehicleId; 
  }
);

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState: {
    vehicles: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteVehicle.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteVehicle.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.vehicles = state.vehicles.filter(vehicle => vehicle.uniqId !== action.payload); 
      })
      .addCase(deleteVehicle.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {} = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
