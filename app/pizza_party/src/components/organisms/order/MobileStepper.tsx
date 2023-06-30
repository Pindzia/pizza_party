import { Box } from "@mui/material";
import { MobileStepper, Button } from "@mui/material";
import { Outlet } from "react-router-dom";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

type Props = {
  maxSteps: number;
  activeStep: number;
  id: string;
  setId: (value: string) => void;
  handleNext: () => void;
  handleBack: () => void;
};

const MobileOrderStepper = (props: Props) => {
  return (
    <Box sx={{ display: { xs: "contents", md: "none" } }}>
      <Box sx={{ height: 1, m: 2 }}>
        <Outlet
          context={{
            handleBack: props.handleBack,
            handleNext: props.handleNext,
          }}
        />
      </Box>
      <MobileStepper
        steps={props.maxSteps}
        position="static"
        activeStep={props.activeStep}
        nextButton={
          <Button
            size="small"
            onClick={props.handleNext}
            disabled={props.activeStep === props.maxSteps - 1}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={props.handleBack}
            disabled={props.activeStep === 0}
          >
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default MobileOrderStepper;
