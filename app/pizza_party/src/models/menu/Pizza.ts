import PizzaType from "./PizzaType";

type Pizza = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageLink: string;
  listOfIngredients: string[];
  type: PizzaType;
};

export default Pizza;
