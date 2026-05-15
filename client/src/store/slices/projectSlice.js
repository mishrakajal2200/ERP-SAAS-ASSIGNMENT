import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    setProjects: (_, action) => action.payload,
  },
});

export const { setProjects } = projectSlice.actions;
export default projectSlice.reducer;