import { createSlice } from "@reduxjs/toolkit";
import { Adress } from "../models/adress/Adress";

export type AdressState = {
  adress: Adress | null;
  adressCollection: Adress[];
  changed: boolean;
};

const initialState: AdressState = {
  adress: null,
  adressCollection: [],
  changed: false,
};

const adressSlice = createSlice({
  name: "adress",
  initialState: initialState,
  reducers: {
    selectAdress(state, { payload }: { payload: Adress | null }) {
      state.adress = payload;
      state.changed = true;
    },
    addAdress(state, { payload }: { payload: Adress }) {
      state.adressCollection.push(payload);
      state.changed = true;
    },
    editAdress(state, { payload }: { payload: Adress }) {
      const adressIndex = state.adressCollection.findIndex(
        (adress) => adress.id === payload.id
      );
      state.adressCollection[adressIndex] = payload;
      if (state.adress?.id === payload.id) state.adress = payload;
      state.changed = true;
    },
    removeAdress(state, { payload }: { payload: number }) {
      state.adressCollection = state.adressCollection.filter(
        (adress) => adress.id !== payload
      );
      if (state.adress?.id === payload) {
        state.adress = null;
      }
      state.changed = true;
    },
    replaceAdresses(
      state,
      {
        payload,
      }: {
        payload: {
          adress: Adress | null;
          adressCollection: Adress[];
        };
      }
    ) {
      state.adressCollection = payload.adressCollection;
      state.adress = payload.adress;
    },
  },
});

export const adressActions = adressSlice.actions;

export default adressSlice.reducer;
