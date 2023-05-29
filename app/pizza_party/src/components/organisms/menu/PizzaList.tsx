import React from "react";
import Pizza from "../../../models/menu/Pizza";
import PizzaLoaderCard from "../../molecules/menu/PizzaLoaderCard";
import PizzaCard from "../../molecules/menu/PizzaCard";

import { Grid } from "@mui/material";
import { LoadingContext } from "../../../store/loading-context";

type Props = {
  children?: React.ReactNode;
  pizzas: Pizza[];
};

const PizzaList = (props: Props) => {
  return (
    <Grid container spacing={3} sx={{ mt: 1 }}>
      {props.pizzas &&
        props.pizzas.map((pizza) => (
          <Grid item xs={12} sm={6} md={4} key={pizza.id}>
            {<PizzaCard item={pizza} />}
          </Grid>
        ))}
    </Grid>
  );
};

export default PizzaList;
