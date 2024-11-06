import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for adding a customer
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

// Async thunk for fetching all customers
export const getAllCustomers = createAsyncThunk(
  'customer/getAllCustomers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:7000/user/getAll');
      return response.data; // Assuming the response contains an array of customers
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
      state.error = null; // Reset error when called
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCustomer.pending, (state) => {
        state.status = 'loading';
        state.error = null; // Clear any previous errors
      })
      .addCase(addCustomer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (Array.isArray(state.customers)) {
          state.customers.push(action.payload); // Ensure state.customers is an array
        } else {
          state.customers = [action.payload]; // Reset as an array if not
        }
      })
      .addCase(addCustomer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Fetch all customers cases
      .addCase(getAllCustomers.pending, (state) => {
        state.status = 'loading';
        state.error = null; // Clear any previous errors
      })
      .addCase(getAllCustomers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.customers = action.payload; // Assuming payload is an array of customers
      })
      .addCase(getAllCustomers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

// Export the resetError action
export const { resetError } = customerSlice.actions;

// Export the reducer
export default customerSlice.reducer;
