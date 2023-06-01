import PizzaToggleButtonGroup from "../../molecules/menu/PizzaToggleButtonGroup";
import { Box } from "@mui/material";

type Props = {
  selectedPizzaTypes: string[];
  setSelectedPizzaTypes: (value: string[]) => void;
};

const PizzaTypePicker = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        mt: 3,
      }}
    >
      <PizzaToggleButtonGroup
        selectedPizzaTypes={props.selectedPizzaTypes}
        setSelectedPizzaTypes={props.setSelectedPizzaTypes}
      ></PizzaToggleButtonGroup>
    </Box>
  );
};

export default PizzaTypePicker;
