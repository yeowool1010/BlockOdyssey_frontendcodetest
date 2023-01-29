import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../components/Cookie";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: {
      category:
        getCookie("CurrentCategory") === undefined
          ? "전체"
          : getCookie("CurrentCategory"),
      searchKeyword:
        getCookie("CurrentSearchKeyword") === undefined
          ? ""
          : getCookie("CurrentSearchKeyword"),
    },
  },
  reducers: {
    Search: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { Search } = searchSlice.actions;

export default searchSlice.reducer;
