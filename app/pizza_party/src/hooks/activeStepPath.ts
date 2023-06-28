import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const steps: Steps = {
  adress: 0,
  cart: 1,
  payment: 2,
  summary: 3,
};

export type Steps = { [propKey: string]: number };

export type OrderSteps = "adress" | "cart" | "payment" | "summary";

export const stepsArray: OrderSteps[] = [
  "adress",
  "cart",
  "payment",
  "summary",
];

const useActiveStep = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { pathname } = useLocation();
  useEffect(() => {
    Object.keys(steps).forEach((key) => {
      if (pathname.includes(key)) {
        setActiveStep(steps[key]);
      }
    });
  }, [pathname]);

  return activeStep;
};

export default useActiveStep;
