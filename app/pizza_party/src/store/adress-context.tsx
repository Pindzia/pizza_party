import React, { ReactNode, useState } from "react";
import { useDispatch } from "react-redux";
import { adressActions } from "./adress-slice";
import { Adress } from "../models/adress/Adress";

const AdressContext = React.createContext({
  isOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onInteraction: (value: boolean) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onAdressSelection: (adress: Adress) => {},
});

export const AdressContextProvider = (props: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const onInteraction = (value: boolean) => {
    setIsOpen(value);
  };

  const onAdressSelection = (adress: Adress) => {
    setIsOpen(false);
    dispatch(adressActions.selectAdress(adress));
  };
  return (
    <AdressContext.Provider
      value={{
        isOpen: isOpen,
        onClick: onClick,
        onInteraction: onInteraction,
        onAdressSelection: onAdressSelection,
      }}
    >
      {props.children}
    </AdressContext.Provider>
  );
};

export default AdressContext;
