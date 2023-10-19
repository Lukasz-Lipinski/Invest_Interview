import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setList: (state, action) => {
      console.log(action.payload)
      state.list = state.list.concat(action.payload);
    }
  },
});

export const { setList } = appSlice.actions;

export default appSlice.reducer;
