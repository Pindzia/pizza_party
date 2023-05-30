import PizzaType from "./PizzaType";

type Pizza = {
  id: number;
  name: string | undefined;
  description: string | undefined;
  price: number;
  imageLink: string | undefined;
  listOfIngredients: string[];
  type: PizzaType;
};

export default Pizza;
