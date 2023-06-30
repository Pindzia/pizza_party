import { useOutletContext } from "react-router-dom";

export type OrderContext = {
  id: string;
  setId: (name: string) => void;
  handleNext: () => void;
  handleBack: () => void;
};

const useOrderContext = () => {
  return useOutletContext<OrderContext>();
};

export default useOrderContext;
