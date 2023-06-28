import { List } from "@mui/material";
import { Adress } from "../../../models/adress/Adress";
import AdressListItem from "../../molecules/adress/AdressListItem";

type Props = {
  adressList: Adress[];
  selectedAdress: Adress | null;
  changeAdress: (adress: Adress) => void;
};

const AdressList = (props: Props) => {
  return (
    <List>
      {props.adressList &&
        props.adressList.map((adress: Adress) => (
          <AdressListItem
            key={adress.id}
            adress={adress}
            onChangeAdressHandler={props.changeAdress}
            isSelected={props.selectedAdress?.name === adress.name}
          />
        ))}
    </List>
  );
};

export default AdressList;
