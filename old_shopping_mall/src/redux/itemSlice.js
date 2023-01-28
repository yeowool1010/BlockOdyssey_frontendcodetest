import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "filteredItems",
  initialState: {
    value: {
      iems: [],
    },
  },
  reducers: {
    FilteredItems: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { FilteredItems } = itemSlice.actions;

export default itemSlice.reducer;
