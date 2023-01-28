// import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import searchPageReducer from "./searchPageSlice";

export default configureStore({
  reducer: {
    search: searchReducer,
    searchPage: searchPageReducer,
  },
});
