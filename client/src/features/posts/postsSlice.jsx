import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: { posts: null },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
      console.log(state.posts);
    },
  },
});

export default postsSlice.reducer;
