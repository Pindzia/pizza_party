import { createSlice } from "@reduxjs/toolkit";
import NoteModel from "../models/ui/notification";

type UiState = {
  notification: NoteModel | null;
};

const initialState: UiState = {
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    showNotification(state, { payload }: { payload: NoteModel | null }) {
      state.notification = payload;
    },
    hideNotification(state) {
      state.notification = null;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
