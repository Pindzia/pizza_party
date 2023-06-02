import SpeedDial from "@mui/material/SpeedDial";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { SpeedDialIcon, useScrollTrigger } from "@mui/material";
import classes from "./ScrollUpButtonDial.module.scss";

const ScrollUpButtonDial = () => {
  const element = document.getElementById("topElement");
  const onClickHandler = () => {
    const element = document.getElementById("topElement");
    element && element.scrollIntoView({ behavior: "smooth" });
  };
  const trigger = useScrollTrigger({
    target: window,
  });
  return (
    <>
      <div id="topElement" className={classes.topScrollPinPoint} />
      <SpeedDial
        hidden={!trigger}
        ariaLabel="scroll up"
        sx={{
          display: "inline",
          position: "fixed",
          bottom: { xs: 100, sm: 50 },
          right: 16,
          zIndex: (theme) => theme.zIndex.drawer + 2,
        }}
        icon={
          <SpeedDialIcon
            icon={<KeyboardArrowUpIcon />}
            openIcon={<KeyboardDoubleArrowUpIcon />}
          />
        }
        onClick={onClickHandler}
      />
    </>
  );
};

export default ScrollUpButtonDial;
