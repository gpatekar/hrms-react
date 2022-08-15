import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';

interface IEmployeeState {
  employeeList: any[];
  selectedEmployee: any;
}

const employeeList = [
  {
    code: 'CCI00001',
    name: 'Hilarios Goes',
    isAdmin: false,
  },
  {
    code: 'CCI00002',
    name: 'Atelia Gomes',
    isAdmin: false,
  },
  {
    code: 'CCI00003',
    name: 'Sneha Nagvenkar',
    isAdmin: false,
  },
  {
    code: 'CCI00004',
    name: 'Ashwin Kumar',
    isAdmin: false,
  },
  {
    code: 'CCI00015',
    name: 'Gurudatta patekar',
    isAdmin: true,
    isCurrentUser: true,
  },
];

const initialState: IEmployeeState = {
  employeeList,
  selectedEmployee: null,
};

export const EmployeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    getEmployeeList: (state) => {
      state.employeeList = [];
    },
    getEmployee: (state, id: PayloadAction<number>) => {
      state.selectedEmployee = state.employeeList.find(
        (employee) => employee.id === id.payload
      );
    },
  },
});

export const employees = (state: RootState) => state.employeeReducer.employeeList;

export const { getEmployee, getEmployeeList } = EmployeeSlice.actions;

export default EmployeeSlice.reducer;
