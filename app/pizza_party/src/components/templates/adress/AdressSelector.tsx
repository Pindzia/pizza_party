import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Adress } from "../../../models/adress/Adress";
import AdressAnimatedTitle from "../../molecules/adress/AdressAnimatedTitle";
import { AdressContextProvider } from "../../../store/adress-context";
import AdressPicker from "../../organisms/adress/AdressPicker";

const AdressSelector = () => {
  const selectedAdress = useSelector<RootState, Adress | null>(
    (state: RootState) => state.adress.adress
  );

  return (
    <AdressContextProvider>
      <AdressAnimatedTitle adress={selectedAdress} />
      <AdressPicker selectedAdress={selectedAdress} />
    </AdressContextProvider>
  );
};

export default AdressSelector;
