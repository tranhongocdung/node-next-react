import { configureStore } from "@reduxjs/toolkit";
import { employeeSlice } from "./employeeSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [employeeSlice.name]: employeeSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
