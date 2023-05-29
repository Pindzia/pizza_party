import Pizza from "../../../models/menu/Pizza";
import PizzaList from "../../organisms/menu/PizzaList";

type Props = {
  pizzas: Pizza[];
};

const PizzasMenu = (props: Props) => {
  return <PizzaList {...props}></PizzaList>;
};

export default PizzasMenu;
