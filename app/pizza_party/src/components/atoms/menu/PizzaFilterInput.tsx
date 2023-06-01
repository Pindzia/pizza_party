import TextField from "@mui/material/TextField";

type Props = {
  inputText: string;
  setInputText: (value: string) => void;
};

const PizzaFilterInput = (props: Props) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setInputText(event.target.value);
  };
  return (
    <TextField
      label="Pizza name, description, ingredient..."
      type="text"
      onChange={handleInputChange}
      value={props.inputText}
      sx={{ width: "100%" }}
    />
  );
};

export default PizzaFilterInput;
