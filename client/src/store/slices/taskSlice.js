import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    setTasks: (_, action) => action.payload,
  },
});

export const { setTasks } = taskSlice.actions;
export default taskSlice.reducer;