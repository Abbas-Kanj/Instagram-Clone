import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./data";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
