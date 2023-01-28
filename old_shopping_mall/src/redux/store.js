// import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import searchPageReducer from "./searchPageSlice";
import itemFilterReducer from "../redux/itemSlice";

export default configureStore({
  reducer: {
    search: searchReducer,
    searchPage: searchPageReducer,
    filteredItems: itemFilterReducer,
  },
});
