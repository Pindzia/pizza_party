import TextField from "@mui/material/TextField";

type Props = {
  id: string;
  label: string;
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error: boolean | undefined;
  helperText: string | false | undefined;
};

const AdressTextInput = (props: Props) => {
  return (
    <TextField
      id={props.id}
      label={props.label}
      name={props.name}
      onChange={props.handleChange}
      value={props.value}
      error={props.error}
      helperText={props.helperText}
      fullWidth
    ></TextField>
  );
};

export default AdressTextInput;
