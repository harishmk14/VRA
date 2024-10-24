import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for updating a customer
export const updateCustomer = createAsyncThunk(
  'customer/updateCustomer',
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`http://localhost:7000/user/update/${id}`, updatedData);
      return response.data; // Assuming the response returns the updated customer data
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : 'Failed to update customer. Please try again.'
      );
    }
  }
);

const updateCustomerSlice = createSlice({
  name: 'updateCustomer',
  initialState: {
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
      .addCase(updateCustomer.pending, (state) => {
        state.status = 'loading';
        state.error = null; // Clear any previous errors
      })
      .addCase(updateCustomer.fulfilled, (state) => {
        state.status = 'succeeded'; // Update successful
      })
      .addCase(updateCustomer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

// Export the resetError action
export const { resetError } = updateCustomerSlice.actions;

// Export the reducer
export default updateCustomerSlice.reducer;
