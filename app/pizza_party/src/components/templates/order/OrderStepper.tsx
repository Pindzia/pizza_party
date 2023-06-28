import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useActiveStep from "../../../hooks/activeStepPath";
import {
  getNextStepText,
  getPreviousStepText,
} from "../../../utils/helpers/OrderStepHelper";
import { Typography } from "@mui/material";
import RegularStepper from "../../organisms/order/RegularStepper";
import MobileOrderStepper from "../../organisms/order/MobileStepper";

const OrderStepper = () => {
  const navigate = useNavigate();
  const activeStep = useActiveStep();

  const handleNext = () => {
    const step = getNextStepText(activeStep);
    navigate(`/order/${step}`);
  };

  const handleBack = () => {
    const step = getPreviousStepText(activeStep);
    navigate(`/order/${step}`);
  };

  return (
    <Box sx={{ height: 1, m: 2 }}>
      <Typography variant="h3" sx={{ mb: 2, mt: 2 }}>
        Order
      </Typography>
      <RegularStepper
        activeStep={activeStep}
        handleNext={handleNext}
        handleBack={handleBack}
      />
      <MobileOrderStepper
        maxSteps={4}
        activeStep={activeStep}
        handleNext={handleNext}
        handleBack={handleBack}
      />
    </Box>
  );
};

export default OrderStepper;
