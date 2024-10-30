import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // Import Axios

export const deleteVehicle = createAsyncThunk(
  'vehicles/deleteVehicle',
  async (vehicleId) => {
    // Use Axios to make the DELETE request
    const response = await axios.delete(`http://localhost:7000/vechicle/delete/${vehicleId}`);
    
    if (response.status !== 200) {
      throw new Error('Failed to delete vehicle'); // Throw error if response status is not OK
    }

    return vehicleId; // Return the vehicle ID to remove from state
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
    // Other reducers like addVehicle, updateVehicle, etc.
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteVehicle.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteVehicle.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Remove the deleted vehicle from the state
        state.vehicles = state.vehicles.filter(vehicle => vehicle.uniqId !== action.payload); // Ensure the correct identifier is used
      })
      .addCase(deleteVehicle.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { /* other actions */ } = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
