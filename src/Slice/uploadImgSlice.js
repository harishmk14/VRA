import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for uploading customer image
export const uploadImg = createAsyncThunk(
  'uploadImg/uploadImg',
  async ({ formData, variable }, { rejectWithValue }) => {
    try {
        console.log(variable);
      const response = await axios.post(`http://localhost:7000/user/img/${variable}`, formData, {
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

const uploadImgSlice = createSlice({
  name: 'uploadImg',
  initialState: {
    imageStatus: null,
    error: null,
  },
  reducers: {
    resetError: (state) => {
      state.error = null; // Reset error when called
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadImg.pending, (state) => {
        state.imageStatus = 'loading';
        state.error = null; // Clear any previous errors
      })
      .addCase(uploadImg.fulfilled, (state, action) => {
        state.imageStatus = 'succeeded';
      })
      .addCase(uploadImg.rejected, (state, action) => {
        state.imageStatus = 'failed';
        state.error = action.payload;
      });
  },
});

// Export the resetError action
export const { resetError } = uploadImgSlice.actions;

// Export the reducer
export default uploadImgSlice.reducer;
