import { configureStore } from '@reduxjs/toolkit';
import reportsReducer from '../features/reportsSlice';

export default configureStore({
  reducer: {
    reports: reportsReducer,
  },
});
