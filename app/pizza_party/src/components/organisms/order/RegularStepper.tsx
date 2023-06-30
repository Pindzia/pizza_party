import { Box } from "@mui/material";
import { Step, StepLabel, Stepper } from "@mui/material";
import { Outlet } from "react-router-dom";

type Props = {
  activeStep: number;
  id: string;
  setId: (value: string) => void;
  handleNext: () => void;
  handleBack: () => void;
};

const RegularStepper = (props: Props) => {
  return (
    <Box sx={{ display: { xs: "none", md: "contents" } }}>
      <Stepper activeStep={props.activeStep}>
        <Step key={0} completed={props.activeStep > 0}>
          <StepLabel>Select adress</StepLabel>
        </Step>
        <Step key={1} completed={props.activeStep > 1}>
          <StepLabel>Check cart</StepLabel>
        </Step>
        <Step key={2} completed={props.activeStep > 2}>
          <StepLabel>Make payment</StepLabel>
        </Step>
        <Step key={3} completed={props.activeStep == 3}>
          <StepLabel>Summary</StepLabel>
        </Step>
      </Stepper>
      <Box sx={{ height: 1, m: 2 }}>
        <Outlet
          context={{
            id: props.id,
            setId: props.setId,
            handleBack: props.handleBack,
            handleNext: props.handleNext,
          }}
        />
      </Box>
    </Box>
  );
};

export default RegularStepper;
