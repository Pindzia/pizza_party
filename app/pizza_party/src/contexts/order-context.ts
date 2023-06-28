import { useOutletContext } from "react-router-dom";

export type OrderContext = {
  handleNext: () => void;
  handleBack: () => void;
};

const useOrderContext = () => {
  return useOutletContext<OrderContext>();
};

export default useOrderContext;
