import { Adress } from "../../../models/adress/Adress";
import { Box, createTheme } from "@mui/material";
import styled from "@mui/material/styles/styled";
import AdressSelectedMenuView, {
  WidthInterface,
} from "../../atoms/adress/AdressSelectedMenuView";
import AdressIcon from "../../atoms/adress/AdressIcon";
import React, { useContext, useLayoutEffect, useState } from "react";
import { Collapse } from "@mui/material";
import useWindowSize from "../../../hooks/windowSize";
import AdressContext from "../../../contexts/adress-context";

type Props = {
  adress: Adress | null;
};

const AnimatedBox = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  width: "200px",
  height: "30px",
}));

const AnimationOverlay = styled(Box)<{ textwidth: number }>(
  ({ theme, textwidth }) => ({
    position: "relative",
    width: "100%",
    height: "30px",
    "&:hover": (textwidth > 200 || !textwidth) && {
      animation: `slide 3000ms linear infinite`,
    },
    "@keyframes slide": {
      "0%": { left: "0px" },
      "50%": { left: "-" + (textwidth === 0 ? 200 : textwidth - 150) + "px" },
      "100%": { left: "0px" },
    },
  })
);

const AdressAnimatedTitle = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(200);
  const size = useWindowSize();
  const ctx = useContext(AdressContext);
  const handleClick = () => {
    setVisible(!visible);
  };
  const textRef = React.useRef<WidthInterface>(null);
  const theme = createTheme();
  const isMobile = theme.breakpoints.values.md < size.width;
  useLayoutEffect(() => {
    if (textRef.current) {
      setWidth(textRef.current.getWidth());
    }
  }, [props.adress]);
  return (
    <Box sx={{ display: "flex" }}>
      <Box onClick={handleClick}>
        <AdressIcon />
      </Box>
      <Collapse
        in={visible || isMobile}
        orientation="horizontal"
        collapsedSize={0}
      >
        <AnimatedBox>
          <AnimationOverlay textwidth={width}>
            <AdressSelectedMenuView
              ref={textRef}
              adress={props.adress}
              onClickHandler={ctx.onInteraction}
            />
          </AnimationOverlay>
        </AnimatedBox>
      </Collapse>
    </Box>
  );
};

export default AdressAnimatedTitle;
