import { Adress } from "../../../models/adress/Adress";
import { Box, createTheme } from "@mui/material";
import styled from "@mui/material/styles/styled";
import AdressSelectedMenuView from "../../atoms/adress/AdressSelectedMenuView";
import AdressIcon from "../../atoms/adress/AdressIcon";
import { useContext, useState } from "react";
import { Collapse } from "@mui/material";
import useWindowSize from "../../../hooks/windowSize";
import AdressContext from "../../../store/adress-context";

type Props = {
  adress: Adress | null;
};

const AnimatedBox = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  width: "200px",
  height: "30px",
}));

const AnimationOverlay = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "30px",
  "&:hover": {
    animation: `slide 4000ms linear infinite`,
  },
  "@keyframes slide": {
    "0%": { left: "0px" },
    "50%": { left: "-300px" },
    "100%": { left: "0px" },
  },
}));

const AdressAnimatedTitle = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const size = useWindowSize();
  const ctx = useContext(AdressContext);
  const handleClick = () => {
    setVisible(!visible);
  };
  const theme = createTheme();
  const isMobile = theme.breakpoints.values.md < size.width;
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
          <AnimationOverlay>
            <AdressSelectedMenuView
              adress={props.adress}
              onClickHandler={ctx.onClick}
            />
          </AnimationOverlay>
        </AnimatedBox>
      </Collapse>
    </Box>
  );
};

export default AdressAnimatedTitle;
