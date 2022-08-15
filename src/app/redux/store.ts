import { configureStore } from '@reduxjs/toolkit';
import EmployeeReducer from '../pages/Employee/EmployeeSlice';

export const store = configureStore({
  reducer: {
    employeeReducer: EmployeeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
