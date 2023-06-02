import { Suspense } from "react";
import PizzasMenu from "../templates/menu/PizzasMenu";
import { Await, defer, json, useLoaderData } from "react-router-dom";
import PizzaType from "../../models/menu/PizzaType";
import Pizza from "../../models/menu/Pizza";
import PizzaMenuLoader from "../templates/menu/PizzaMenuLoader";

type Props = Record<string, never>;

type State = Record<string, never>;

const Menu = (props: Props) => {
  const { pizzas } = useLoaderData();
  return (
    <Suspense fallback={<PizzaMenuLoader />}>
      <Await resolve={pizzas}>
        {(pizzas) => <PizzasMenu pizzas={pizzas} />}
      </Await>
    </Suspense>
  );
};

export default Menu;

async function loaderPizzas() {
  /*
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    return json({ message: "Loading events failed" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }*/
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const cards = Array.from(Array(30).keys()); // for four cards
  const pizzas = cards.map((card: number): Pizza => {
    return {
      id: card,
      name: "Pizza " + card,
      description: "Pizza description " + card,
      price: 10 + card,
      imageLink: "https://picsum.photos/120/120?random=" + card,
      listOfIngredients: ["Ingredient " + card],
      type: PizzaType[PizzaType[card % 7] as keyof typeof PizzaType],
    };
  });
  return pizzas;
}

export async function loader() {
  return defer({
    pizzas: loaderPizzas(),
  });
}
