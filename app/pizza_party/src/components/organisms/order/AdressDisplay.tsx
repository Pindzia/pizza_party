import AdressLabelText from "../../atoms/adress/AdressLabelText";
import { Adress } from "../../../models/adress/Adress";
import { Paper } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import AdressVariableText from "../../atoms/adress/AdressVariableText";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import OrderStepBox from "../../templates/order/OrderStepBox";
import useOrderContext from "../../../contexts/order-context";
import { useState } from "react";
import AdressDialogPicker from "./AdressDialogPicker";

const AdressLabels: { [propKey: string]: string } = {
  name: "Name",
  surname: "Surname",
  street: "Street",
  city: "City",
  zipCode: "Zip Code",
  country: "Country",
  phoneNumber: "Phone Number",
};

const AdressDisplay = () => {
  const ctx = useOrderContext();
  const selectedAdress = useSelector<RootState, Adress | null>(
    (state: RootState) => state.adress.adress
  );
  const adressList = useSelector<RootState, Adress[]>(
    (state: RootState) => state.adress.adressCollection
  );
  const [open, setOpen] = useState(false);
  const [choosenAdress, setChoosenAdress] = useState(selectedAdress);
  const handleOpenAdressPicker = () => {
    setOpen(true);
  };
  const handleCloseAdressPicker = () => {
    setOpen(false);
  };
  const changeAdress = (adress: Adress) => {
    setChoosenAdress(adress);
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: 1 }}>
      <OrderStepBox
        bottomLine={
          <Box
            sx={{
              position: "sticky",
              bottom: 0,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              height: 1,
              m: 2,
            }}
          >
            <Button
              disabled={true}
              sx={{ display: { xs: "none", md: "hidden" } }}
            ></Button>
            <Button
              onClick={() => {
                console.log("AdressDisplay");
              }}
            >
              Select Adress
            </Button>
            <Button
              sx={{ display: { xs: "none", md: "block" } }}
              onClick={() => {
                ctx.handleNext();
              }}
            >
              NEXT
            </Button>
          </Box>
        }
      >
        <Paper onClick={handleOpenAdressPicker}>
          {(choosenAdress &&
            Object.keys(choosenAdress).map(
              (key) =>
                key !== "id" && (
                  <div className="flex flex-row justify-between m-2">
                    <div className="basis-1/3 md:basis-1/3 pl-2 pr-2">
                      <AdressLabelText Label={AdressLabels[key]} />
                    </div>

                    <div className="basis-2/3 md:basis-2/3">
                      <AdressVariableText text={choosenAdress[key]} />
                    </div>
                  </div>
                )
            )) || (
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                height: 1,
                "&:hover": {
                  backgroundColor: "lightgray",
                  cursor: "pointer",
                },
              }}
              onClick={handleOpenAdressPicker}
            >
              <h3>Adress is not selected. Click to select or create...</h3>
            </Paper>
          )}
        </Paper>
      </OrderStepBox>
      <AdressDialogPicker
        open={open}
        closeDialog={handleCloseAdressPicker}
        adressList={adressList}
        changeAdress={changeAdress}
        selectedAdress={choosenAdress}
      />
    </Box>
  );
};

export default AdressDisplay;
