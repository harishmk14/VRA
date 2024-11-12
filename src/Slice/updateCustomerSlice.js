import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const updateCustomer = createAsyncThunk(
  'customer/updateCustomer',
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`http://localhost:7000/user/update/${id}`, updatedData);
      return response.data; 
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
      state.error = null; 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateCustomer.pending, (state) => {
        state.status = 'loading';
        state.error = null; 
      })
      .addCase(updateCustomer.fulfilled, (state) => {
        state.status = 'succeeded'; 
      })
      .addCase(updateCustomer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});


export const { resetError } = updateCustomerSlice.actions;


export default updateCustomerSlice.reducer;
