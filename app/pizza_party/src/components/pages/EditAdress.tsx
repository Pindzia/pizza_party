import { useParams } from "react-router-dom";
import { Adress } from "../../models/adress/Adress";
import { useSelector } from "react-redux";
import AdressForm from "../templates/adress/AdressForm";
import { RootState } from "../../store";

const EditAdress = () => {
  const param = useParams<{ id: string }>();
  const id = param && param.id ? parseInt(param.id) : 0;
  const specifiedAdress = useSelector<RootState, Adress[]>(
    (state: RootState) => state.adress.adressCollection
  ).find((adress: Adress) => adress.id === id);
  if (!specifiedAdress) {
    return <div>Adress not found</div>;
  }

  return <AdressForm method="put" adress={specifiedAdress} />;
};

export default EditAdress;
