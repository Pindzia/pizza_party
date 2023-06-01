import Box from "@mui/material/Box";
import PizzaFilterInput from "../../atoms/menu/PizzaFilterInput";

type Props = {
  inputText: string;
  setInputText: (value: string) => void;
};

const PizzaFilterLine = (props: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", mt: 3, ml: 2, mr: 2 }}>
      <PizzaFilterInput {...props}></PizzaFilterInput>
    </Box>
  );
};

export default PizzaFilterLine;
