import { Adress } from "../../models/adress/Adress";

export default class AdressService {
  saveAdresses(adresses: Adress[]) {
    localStorage.setItem("adresses", JSON.stringify(adresses));
  }

  saveSelectedAdresses(adress: Adress) {
    localStorage.setItem("selectedAdress", JSON.stringify(adress));
  }

  getSelectedAdress(): Adress | null {
    const selectedAdresses = localStorage.getItem("selectedAdress");
    if (selectedAdresses) {
      return JSON.parse(selectedAdresses) as Adress;
    }
    return null;
  }

  getAdresses(): Adress[] | null {
    const adresses = localStorage.getItem("adresses");
    if (adresses) {
      return JSON.parse(adresses) as Adress[];
    }
    return null;
  }
}
