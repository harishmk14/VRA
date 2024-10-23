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

// Async thunk for uploading customer image
export const uploadCustomerImage = createAsyncThunk(
  'customer/uploadCustomerImage',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:7000/user/img', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : 'Image upload failed. Please try again.'
      );
    }
  }
);


const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    customers: [],
    imageStatus: null,
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
      // Add customer cases
      .addCase(addCustomer.pending, (state) => {
        state.status = 'loading';
        state.error = null; // Clear any previous errors
      })
      .addCase(addCustomer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.customers.push(action.payload);
      })
      .addCase(addCustomer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Upload image cases
      .addCase(uploadCustomerImage.pending, (state) => {
        state.imageStatus = 'loading';
        state.error = null; // Clear any previous errors
      })
      .addCase(uploadCustomerImage.fulfilled, (state, action) => {
        state.imageStatus = 'succeeded';
        // Optionally update state with uploaded image data
      })
      .addCase(uploadCustomerImage.rejected, (state, action) => {
        state.imageStatus = 'failed';
        state.error = action.payload;
      });
  },
});

// Export the resetError action
export const { resetError } = customerSlice.actions;

// Export the reducer
export default customerSlice.reducer;
