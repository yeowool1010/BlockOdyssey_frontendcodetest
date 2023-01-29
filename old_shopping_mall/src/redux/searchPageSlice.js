import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../components/Cookie";

export const searchPageSlice = createSlice({
  name: "searchPage",
  initialState: {
    value: {
      pagingLimitNum:
        getCookie("CurrentPaginglimit") === undefined
          ? 10
          : getCookie("CurrentPaginglimit"),
      itemLength:
        getCookie("ItemLength") === undefined ? 100 : getCookie("ItemLength"),
      selectBtn:
        getCookie("selectBtn") === undefined ? 1 : getCookie("selectBtn"),
    },
  },
  reducers: {
    SearchPage: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },
  },
});

export const { SearchPage } = searchPageSlice.actions;

export default searchPageSlice.reducer;
