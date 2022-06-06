import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

const initialState2 = {
  value2: false,
};

export const dropSlice = createSlice({
  name: "drop",
  initialState,
  reducers: {
    dropHandler: (state = initialState) => {
      state.value = !state.value;
    },
    dropHandler2: (state = initialState2) => {
      state.value2 = true;
    },
    dropHandler3: (state = initialState2) => {
      state.value2 = false;
    },
  },
});

export const { dropHandler, dropHandler2, dropHandler3 } = dropSlice.actions;

export const selectValue = (state) => state.drop.value;

export const selectValue2 = (state) => state.drop.value2;

export default dropSlice.reducer;
