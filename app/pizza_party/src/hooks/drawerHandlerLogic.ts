import { useState } from "react";

export const useDrawerHandlerLogic = () => {
  const onInteraction = (value: boolean) => {
    setIsOpen(value);
  };

  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    onInteraction,
  };
};
