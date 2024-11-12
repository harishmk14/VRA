import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';


export const fetchDrivers = createAsyncThunk(
  'drivers/fetchDrivers',
  async () => {
    const response = await axios.get('http://localhost:7000/driver/getAll');
    return response.data;
  }
);


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


const initialState = {
  drivers: [],        
  loading: false,  
  error: null,  
};


const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      
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
      
      .addCase(addDriver.pending, (state) => {
        state.loading = true;
      })
      .addCase(addDriver.fulfilled, (state, action) => {
        state.loading = false;
        state.addedDriver = action.payload; 
      })
      .addCase(addDriver.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default driversSlice.reducer;
