import { useEffect, useState } from "react";
import Pizza from "../../../models/menu/Pizza";
import PizzaList from "../../organisms/menu/PizzaList";
import PizzaDialog from "../../organisms/menu/PizzaDialog";
import PizzaType from "../../../models/menu/PizzaType";
import PizzaTypePicker from "../../organisms/menu/PizzaTypePicker";
import PizzaFilterLine from "../../molecules/menu/PizzaFilterLine";

type Props = {
  pizzas: Pizza[];
};

const PizzasMenu = (props: Props) => {
  const [selectedPizza, setSelectedPizza] = useState<Pizza | null>(null);
  const [selectedPizzaTypes, setSelectedPizzaTypes] = useState<string[]>([]);
  const [filterText, setFilterText] = useState<string>("");
  const [filteredPizzas, setFilteredPizzas] = useState(props.pizzas);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedPizza(null);
  };
  //dialog handling
  useEffect(() => {
    if (selectedPizza) setIsDialogOpen(true);
  }, [selectedPizza]);
  //filtering pizzas
  useEffect(() => {
    if (selectedPizzaTypes.length === 0 && filterText === "") {
      setFilteredPizzas(props.pizzas);
      return;
    }
    let filteredPizzas = [...props.pizzas];
    if (selectedPizzaTypes.length !== 0)
      filteredPizzas = filteredPizzas.filter((pizza) =>
        selectedPizzaTypes.includes(PizzaType[pizza.type])
      );
    if (filterText !== "")
      filteredPizzas = filteredPizzas.filter(
        (pizza) =>
          pizza.name?.toLowerCase().includes(filterText.toLowerCase()) ||
          pizza.description?.toLowerCase().includes(filterText.toLowerCase()) ||
          (pizza.listOfIngredients.length !== 0 &&
            pizza.listOfIngredients.some((ingredient) =>
              ingredient.toLowerCase().includes(filterText.toLowerCase())
            ))
      );

    setFilteredPizzas(filteredPizzas);
  }, [selectedPizzaTypes, filterText, props.pizzas]);
  return (
    <>
      <PizzaTypePicker
        selectedPizzaTypes={selectedPizzaTypes}
        setSelectedPizzaTypes={setSelectedPizzaTypes}
      ></PizzaTypePicker>
      <PizzaFilterLine inputText={filterText} setInputText={setFilterText} />
      <PizzaList
        pizzas={filteredPizzas}
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
