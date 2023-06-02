import { Chip, ToggleButton, ToggleButtonGroup, useTheme } from "@mui/material";
import { generatePizzaListTypes } from "../../../utils/helpers/PizzaTypesList";

const pizzaTypeList = generatePizzaListTypes();
type Props = {
  selectedPizzaTypes: string[];
  setSelectedPizzaTypes: (value: string[]) => void;
};

const PizzaToggleButtonGroup = (props: Props) => {
  const theme = useTheme();
  const handlePizzaTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newPizzaTypes: string[]
  ) => {
    props.setSelectedPizzaTypes(newPizzaTypes);
  };

  return (
    <ToggleButtonGroup
      onChange={handlePizzaTypeChange}
      value={props.selectedPizzaTypes}
      aria-label="Types of pizza"
      sx={{
        p: 1,
        overflow: "auto",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
          justifyContent: "flex-start",
        },
      }}
    >
      {pizzaTypeList.map((pizzaType) => (
        <ToggleButton
          sx={{ border: "hidden" }}
          key={pizzaType.name}
          value={pizzaType.name}
        >
          <Chip label={pizzaType.name}></Chip>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default PizzaToggleButtonGroup;
