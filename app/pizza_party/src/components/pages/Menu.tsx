import React, { Component } from "react";
import Title from "../atoms/Title";
import PizzaTypeList from "../templates/menu/PizzaTypeList";
import PizzasGrid from "../templates/menu/PizzasGrid";

type Props = Record<string, never>;

type State = Record<string, never>;

class Menu extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <ResponsiveGrid />
      </>
    );
  }
}

export default Menu;

import { Grid } from "@mui/material";
import PizzaCard from "../molecules/menu/PizzaCard";

const ResponsiveGrid = () => {
  const cards = Array.from(Array(30).keys()); // for four cards
  const pizzas = cards.map((card) => {
    return {
      id: card,
      name: "Pizza " + card,
      description: "Pizza description " + card,
      price: 10 + card,
      totalPrice: 10 + card,
      quantity: 1,
    };
  });
  return (
    <Grid container spacing={3} sx={{ mt: 1 }}>
      {pizzas.map((pizza) => (
        <Grid item xs={12} lg={3} md={6} key={pizza.id}>
          <PizzaCard item={pizza} />
        </Grid>
      ))}
    </Grid>
  );
};
