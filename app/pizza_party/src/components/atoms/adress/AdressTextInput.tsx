import TextField from "@mui/material/TextField";

type Props = {
  id: string;
  label: string;
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  error?: boolean;
  helperText?: string | false;
};

const AdressTextInput = (props: Props) => {
  const helperText = props.helperText ? props.helperText : " ";
  return (
    <TextField
      id={props.id}
      label={props.label}
      name={props.name}
      onChange={props.handleChange}
      onBlur={props.handleBlur}
      value={props.value}
      error={props.error}
      helperText={helperText}
      fullWidth
    ></TextField>
  );
};

export default AdressTextInput;
