import React from "react";
import InputMask from "react-input-mask";

import AdressTextInputMasked from "../../atoms/adress/AdressTextInputMasked";

type Props = {
  id: string;
  label: string;
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error: boolean | undefined;
  helperText: string | false | undefined;
  mask: string;
};

const AdressMaskedInput = (props: Props) => {
  return (
    <InputMask
      mask={props.mask}
      value={props.value}
      onChange={props.handleChange}
    >
      <AdressTextInputMasked
        error={props.error}
        name={props.name}
        helperText={props.helperText}
        id={props.id}
        label={props.label}
      />
    </InputMask>
  );
};

export default AdressMaskedInput;
