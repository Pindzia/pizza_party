import React from "react";

type Props = {
  id: number;
};

const AdressHiddenIdInput = (props: Props) => {
  return <input type="hidden" name="id" value={props.id} />;
};

export default AdressHiddenIdInput;
