import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { adressActions } from "../store/adress-slice";
import { Adress } from "../models/adress/Adress";
import { useDrawerHandlerLogic } from "../hooks/drawerHandlerLogic";

const AdressContext = React.createContext({
  isOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onInteraction: (value: boolean) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onAdressSelection: (adress: Adress) => {},
});

export const AdressContextProvider = (props: { children: ReactNode }) => {
  const { isOpen, onInteraction } = useDrawerHandlerLogic();
  const dispatch = useDispatch();

  const onAdressSelection = (adress: Adress) => {
    onInteraction(false);
    dispatch(adressActions.selectAdress(adress));
  };
  return (
    <AdressContext.Provider
      value={{
        isOpen: isOpen,
        onInteraction: onInteraction,
        onAdressSelection: onAdressSelection,
      }}
    >
      {props.children}
    </AdressContext.Provider>
  );
};

export default AdressContext;
