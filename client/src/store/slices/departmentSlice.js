import { createSlice } from "@reduxjs/toolkit";

const departmentSlice = createSlice({
  name: "departments",
  initialState: [],
  reducers: {
    setDepartments: (_, action) => action.payload,
  },
});

export const { setDepartments } = departmentSlice.actions;
export default departmentSlice.reducer;