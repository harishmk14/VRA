import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './Slice/customerSlice';

// Create the Redux store
const store = configureStore({
  reducer: {
    customer: customerReducer,
  },
});

// Export the store as the default export
export default store;
