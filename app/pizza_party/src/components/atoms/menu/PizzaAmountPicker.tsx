import { TextField, styled } from "@mui/material";

type Props = {
  value: number;
  setValue: (value: number) => void;
  error: boolean;
  setError: (error: boolean) => void;
};

const StyledTextField = styled(TextField)({
  "& .MuiInput-underline:after": {
    borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
  },
  "&": {
    width: "4rem",
  },
});

const PizzaAmountPicker = (props: Props) => {
  return (
    <StyledTextField
      required
      type="number"
      variant="standard"
      value={props.value}
      onChange={(event) => {
        const number = Number(event.target.value);
        props.setValue(number);
        props.setError(number < 1);
      }}
      onKeyDown={(event) => {
        event.preventDefault();
      }}
      onFocus={(event) => {
        event.target.blur();
      }}
      inputProps={{ min: 1 }}
      error={props.error}
      helperText={props.error ? "Amount must be greater than 0" : ""}
    ></StyledTextField>
  );
};

export default PizzaAmountPicker;
