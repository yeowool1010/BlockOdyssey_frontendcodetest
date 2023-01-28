import { createSlice } from "@reduxjs/toolkit";

export const searchPageSlice = createSlice({
  name: "searchPage",
  initialState: {
    value: { pageNum: 10 },
  },
  reducers: {
    SearchPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { SearchPage } = searchPageSlice.actions;

export default searchPageSlice.reducer;
