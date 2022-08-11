import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import employeeApi from "../apis/employeeApi";

//thunk
export const fetchEmployeeListAsync = createAsyncThunk(
  "employee/fetchEmployeeList",
  async () => {
    const response = await employeeApi.getAll({});
    return response.data;
  }
);

const initialState = {
  list: [],
};

// Actual Slice
export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    // Action to set the employee list
    setEmployeeList(state, action) {
      state.list = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper,
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.employee,
      };
    },
  },
});

export const { setEmployeeList } = employeeSlice.actions;

//selectors
export const selectEmployeeList = (state) => state.employee.list;

export default employeeSlice.reducer;
