import { Adress } from "../../../models/adress/Adress";
import { Typography } from "@mui/material";
import React, { useImperativeHandle, ForwardRefRenderFunction } from "react";
import { ForwardedRef } from "react";

type Props = {
  adress: Adress | null;
  onClickHandler: (value: boolean) => void;
};

export type WidthInterface = {
  getWidth: () => number;
};

const AdressSelectedMenuView: ForwardRefRenderFunction<
  WidthInterface,
  Props
> = (props: Props, ref: ForwardedRef<WidthInterface>) => {
  const title = props.adress
    ? props.adress.name
    : "No adress selected. Click here to select one.";
  const onClickHandler = () => {
    props.onClickHandler(true);
  };
  const typographyRef = React.useRef<HTMLSpanElement>(null);
  useImperativeHandle(ref, () => ({
    getWidth() {
      return typographyRef.current?.offsetWidth ?? 200;
    },
  }));
  return (
    <Typography
      variant="h6"
      ref={typographyRef}
      sx={{
        position: "absolute",
        whiteSpace: "nowrap",
        ":hover": {
          cursor: "pointer",
        },
      }}
      onClick={onClickHandler}
    >
      {title}
    </Typography>
  );
};
const AdressSelectedMenuViewRef = React.forwardRef(AdressSelectedMenuView);

export default AdressSelectedMenuViewRef;
