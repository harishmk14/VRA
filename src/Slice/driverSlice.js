import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

// Async thunk for fetching drivers
export const fetchDrivers = createAsyncThunk(
  'drivers/fetchDrivers',
  async () => {
    const response = await axios.get('http://localhost:7000/driver/getAll');
    return response.data;
  }
);

// Async thunk for adding a new driver
export const addDriver = createAsyncThunk(
  'drivers/addDriver',
  async (driverData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:7000/driver/add', driverData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      toast.success('Driver added successfully!');
      return response.data;
    } catch (error) {
      toast.error(`Failed to add driver: ${error.response ? error.response.data : error.message}`);
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Initial state for the drivers slice
const initialState = {
  drivers: [],        // Holds the list of drivers
  loading: false,  // Tracks loading state for both fetch and add actions
  error: null,     // Holds any error messages// Holds data of the newly added driver
};

// Create the drivers slice
const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handling fetchDrivers actions
      .addCase(fetchDrivers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDrivers.fulfilled, (state, action) => {
        state.loading = false;
        state.drivers = action.payload.data;
      })
      .addCase(fetchDrivers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handling addDriver actions
      .addCase(addDriver.pending, (state) => {
        state.loading = true;
      })
      .addCase(addDriver.fulfilled, (state, action) => {
        state.loading = false;
        state.addedDriver = action.payload; // Store the added driver data
      })
      .addCase(addDriver.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default driversSlice.reducer;
