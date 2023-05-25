import { createSlice } from "@reduxjs/toolkit";

type Adress = {
  id: number;
  name: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
};

type AdressState = {
  adress: Adress | null;
  adressCollection: Adress[];
  adressCollectionLoaded: boolean;
};

const initialState: AdressState = {
  adress: null,
  adressCollection: [],
  adressCollectionLoaded: false,
};

const adressSlice = createSlice({
  name: "adress",
  initialState: initialState,
  reducers: {
    selectAdress(state, { payload }: { payload: Adress }) {
      state.adress = payload;
    },
    addAdress(state, { payload }: { payload: Adress }) {
      state.adressCollection.push(payload);
    },
    replaceAdress(state, { payload }: { payload: Adress[] }) {
      state.adressCollection = payload;
    },
    removeAdress(state, { payload }: { payload: number }) {
      state.adressCollection = state.adressCollection.filter(
        (adress) => adress.id !== payload
      );
    },
  },
});

export const adressActions = adressSlice.actions;

export default adressSlice.reducer;
