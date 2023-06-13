import { defer } from "react-router-dom";
import { Adress } from "../../models/adress/Adress";
import AdressForm from "../templates/adress/AdressForm";
import { QueryClient } from "@tanstack/react-query";

const NewAdress = () => {
  return (
    <AdressForm
      title="New Adress"
      method="post"
      adress={{
        id: undefined,
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

async function loaderAdresses(queryClient: QueryClient) {
  /*
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    return json({ message: "Loading events failed" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }*/

  const enumerator = Array.from(Array(30).keys());
  const adresses = enumerator.map((adressid: number): Adress => {
    return {
      id: adressid,
      name: "Name " + adressid,
      surname: "Surname " + adressid,
      street: "Adress " + adressid,
      city: "City " + adressid,
      zipCode: "ZipCode " + adressid,
      country: "Country " + adressid,
      phoneNumber: "PhoneNumber " + adressid,
    };
  });
  return adresses;
}

export const loader = (queryClient: QueryClient) => async () => {
  return defer({
    adresses: loaderAdresses(queryClient),
  });
};
