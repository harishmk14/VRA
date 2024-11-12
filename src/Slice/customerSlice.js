import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const addCustomer = createAsyncThunk(
  'customer/addCustomer',
  async (customerData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:7000/user/reg', customerData);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : 'An error occurred. Please try again.'
      );
    }
  }
);


export const getAllCustomers = createAsyncThunk(
  'customer/getAllCustomers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:7000/user/getAll');
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : 'Failed to fetch customers. Please try again.'
      );
    }
  }
);

const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    customers: [],
    status: null,
    error: null,
  },
  reducers: {
    resetError: (state) => {
      state.error = null; 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCustomer.pending, (state) => {
        state.status = 'loading';
        state.error = null; 
      })
      .addCase(addCustomer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (Array.isArray(state.customers)) {
          state.customers.push(action.payload); 
        } else {
          state.customers = [action.payload]; 
        }
      })
      .addCase(addCustomer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(getAllCustomers.pending, (state) => {
        state.status = 'loading';
        state.error = null; 
      })
      .addCase(getAllCustomers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.customers = action.payload; 
      })
      .addCase(getAllCustomers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});


export const { resetError } = customerSlice.actions;

export default customerSlice.reducer;
