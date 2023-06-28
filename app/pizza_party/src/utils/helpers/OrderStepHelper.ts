import { OrderSteps, stepsArray } from "../../hooks/activeStepPath";

const max = 3;
export const maxStepsCount = 4;

const getPreviousStep = (currentStep: number) => {
  return currentStep > 0 ? currentStep - 1 : 0;
};

const getNextStep = (currentStep: number) => {
  return currentStep < max ? currentStep + 1 : max;
};

export const getNextStepText = (currentStep: number): OrderSteps => {
  return stepsArray[getNextStep(currentStep)];
};

export const getPreviousStepText = (currentStep: number): OrderSteps => {
  return stepsArray[getPreviousStep(currentStep)];
};
