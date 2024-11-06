import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // Import axios

// Async thunk to fetch all languages from the API using axios
export const fetchDriverLanguages = createAsyncThunk(
  'driverLanguages/fetchAllLanguages',
  async () => {
    try {
      const response = await axios.get('http://localhost:7000/driver/getAllLang');
      return response.data; // Assuming the data returned is an object with a 'data' key
    } catch (error) {
      throw Error(error.response ? error.response.data.message : error.message); // Handle errors
    }
  }
);

const initialState = {
languages: [],
  loading: false,
  error: null,
};

const driversSlice = createSlice({
  name: 'driverLanguages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDriverLanguages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDriverLanguages.fulfilled, (state, action) => {
        state.loading = false;
        state.languages = action.payload.data; // Update state with fetched data (assuming 'data' field contains the languages)
      })
      .addCase(fetchDriverLanguages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Handle errors
      });
  },
});

export default driversSlice.reducer;
