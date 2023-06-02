import { useEffect, useState } from "react";
import Pizza from "../../../models/menu/Pizza";
import PizzaList from "../../organisms/menu/PizzaList";
import PizzaDialog from "../../organisms/menu/PizzaDialog";

type Props = {
  pizzas: Pizza[];
};

const PizzasMenu = (props: Props) => {
  const [selectedPizza, setSelectedPizza] = useState<Pizza | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedPizza(null);
  };
  useEffect(() => {
    if (selectedPizza) setIsDialogOpen(true);
  }, [selectedPizza]);
  return (
    <>
      <PizzaList
        pizzas={props.pizzas}
        setSelectedPizza={setSelectedPizza}
      ></PizzaList>
      <PizzaDialog
        item={selectedPizza}
        isOpen={isDialogOpen}
        handleDialogClose={handleDialogClose}
      ></PizzaDialog>
    </>
  );
};

export default PizzasMenu;
