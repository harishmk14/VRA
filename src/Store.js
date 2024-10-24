import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './Slice/customerSlice';
import updateCustomerReducer from './Slice/updateCustomerSlice';

const store = configureStore({
  reducer: {
    customer: customerReducer,
    updateCustomer: updateCustomerReducer,
  },
});

export default store;
