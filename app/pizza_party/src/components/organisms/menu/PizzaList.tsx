import React from "react";
import Pizza from "../../../models/menu/Pizza";
import PizzaCard from "../../molecules/menu/PizzaCard";
import { Grid } from "@mui/material";

type Props = {
  children?: React.ReactNode;
  pizzas: Pizza[];
  setSelectedPizza: React.Dispatch<React.SetStateAction<Pizza | null>>;
};

const PizzaList = (props: Props) => {
  return (
    <Grid container spacing={3} sx={{ mt: 1 }}>
      {props.pizzas &&
        props.pizzas.map((pizza) => (
          <Grid item xs={12} sm={6} md={4} key={pizza.id}>
            {
              <PizzaCard
                item={pizza}
                setSelectedPizza={props.setSelectedPizza}
              />
            }
          </Grid>
        ))}
    </Grid>
  );
};

export default PizzaList;
