import TextField from "@mui/material/TextField";

type Props = {
  id: string;
  label: string;
  name: string;
  error: boolean | undefined;
  helperText: string | false | undefined;
};

const AdressTextInputMasked = (props: Props) => {
  return (
    <TextField
      id={props.id}
      label={props.label}
      name={props.name}
      error={props.error}
      helperText={props.helperText}
      fullWidth
    ></TextField>
  );
};

export default AdressTextInputMasked;
