import { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { AdressState, adressActions } from "../store/adress-slice";
import AdressService from "../utils/services/adress-service";
import { useRouteLoaderData } from "react-router-dom";
import { Adress } from "../models/adress/Adress";

let isInitial = true;
const useAdressLoader = (dispatch: AppDispatch) => {
  const adressesState = useSelector<RootState, AdressState>(
    (state: RootState) => state.adress
  );

  const { adresses } = useRouteLoaderData("root");
  useEffect(() => {
    async function loadAdresses() {
      const result = (await adresses) as {
        adress: Adress | null;
        adresses: Adress[] | null;
      };
      dispatch(
        adressActions.replaceAdresses({
          adress: result.adress ?? null,
          adressCollection: result.adresses ?? [],
        })
      );
    }
    loadAdresses();
  }, [dispatch]);

  useEffect(() => {
    const adressService = new AdressService();
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (adressesState.changed) {
      adressesState.adressCollection &&
        adressService.saveAdresses(adressesState.adressCollection);
      adressesState.adress &&
        adressService.saveSelectedAdresses(adressesState.adress);
    }
  }, [adressesState, dispatch]);
};

export default useAdressLoader;
