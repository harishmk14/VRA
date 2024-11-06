import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

// Async thunk for making a POST request to add a driver using Axios
export const addDriver = createAsyncThunk(
  'driver/addDriver',
  async (driverData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:7000/driver/add', driverData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      toast.success('Driver added successfully!');
      return response.data; // Assuming the response is JSON
    } catch (error) {
      toast.error(`Failed to add driver: ${error.response ? error.response.data : error.message}`);
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Initial state for the driver slice
const initialState = {
  driver: null,
  loading: false,
  error: null,
};

// Create the slice
const driverSlice = createSlice({
  name: 'driver',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addDriver.pending, (state) => {
        state.loading = true;
      })
      .addCase(addDriver.fulfilled, (state, action) => {
        state.loading = false;
        state.driver = action.payload; // Store driver data after successful request
      })
      .addCase(addDriver.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message in case of failure
      });
  },
});

export default driverSlice.reducer;
