import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: { category: "전체", searchInput: "" },
  },
  reducers: {
    Search: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { Search } = searchSlice.actions;

export default searchSlice.reducer;
