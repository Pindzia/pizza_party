import { defer } from "react-router-dom";
import { Adress } from "../../models/adress/Adress";
import AdressForm from "../templates/adress/AdressForm";
import { QueryClient } from "@tanstack/react-query";
import AdressService from "../../utils/services/adress-service";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const NewAdress = () => {
  const newId = useSelector<RootState, number>(
    (state) => state.adress.adressCollection.length + 1
  );
  return (
    <AdressForm
      title="New Adress"
      method="post"
      adress={{
        id: newId,
        name: "",
        surname: "",
        street: "",
        city: "",
        zipCode: "",
        country: "",
        phoneNumber: "",
      }}
    />
  );
};

export default NewAdress;

async function loaderAdresses(
  queryClient: QueryClient
): Promise<{ adress: Adress | null; adresses: Adress[] | null }> {
  const adressService = new AdressService();
  const adressesLocal = adressService.getAdresses();
  const selectedAdressLocal = adressService.getSelectedAdress();

  return { adress: selectedAdressLocal, adresses: adressesLocal };
}

export const loader = (queryClient: QueryClient) => async () => {
  return defer({
    adresses: loaderAdresses(queryClient),
  });
};
