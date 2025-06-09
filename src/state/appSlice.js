import { createSlice } from "@reduxjs/toolkit";

// Format date to "YYYY-MM-DD"
export const formatDate = (dateObject) => {
  return `${dateObject.getFullYear()}-${String(
    dateObject.getMonth() + 1
  ).padStart(2, "0")}-${String(dateObject.getDate()).padStart(2, "0")}`;
};

const appSlice = createSlice({
  name: "app",
  initialState: {
    UI: {
      isMenuOpen: false,
      selectedDate: null,
    },
  },
  reducers: {
    setIsMenuOpen: (state, action) => {
      state.UI.isMenuOpen = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.UI.selectedDate = action.payload;
    },
  },
});

export const { setIsMenuOpen, setSelectedDate } = appSlice.actions;

export default appSlice.reducer;
