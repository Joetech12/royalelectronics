import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

const initialState2 = {
  value2: true,
};

const initialState3 = {
  value3: true,
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
    dropHandler4: (state = initialState) => {
      if ((state.value = true)) {
        state.value2 = false;
        state.value3 = false;
      }
    },
    dropHandler5: (state = initialState2) => {
      if ((state.value2 = true)) {
        state.value = false;
        state.value3 = false;
      }
    },
    dropHandler6: (state = initialState3) => {
      if ((state.value3 = true)) {
        state.value = false;
        state.value2 = false;
      }
    },
  },
});

export const {
  dropHandler,
  dropHandler2,
  dropHandler3,
  dropHandler4,
  dropHandler5,
  dropHandler6,
} = dropSlice.actions;

export const selectValue = (state) => state.drop.value;

export const selectValue2 = (state) => state.drop.value2;

export const selectValue3 = (state) => state.drop.value3;

export default dropSlice.reducer;
