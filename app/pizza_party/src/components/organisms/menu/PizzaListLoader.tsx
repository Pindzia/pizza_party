import PizzaLoaderCard from "../../molecules/menu/PizzaLoaderCard";
import { Grid } from "@mui/material";
import { getEmptyPizzasForLoading } from "../../../utils/helpers/PizzaLoaderHealper";

const PizzaListLoader = () => {
  const pizzas = getEmptyPizzasForLoading();
  return (
    <Grid container spacing={3} sx={{ mt: 1 }}>
      {pizzas &&
        pizzas.map((pizza) => (
          <Grid item xs={12} sm={6} md={4} key={pizza.id}>
            <PizzaLoaderCard />
          </Grid>
        ))}
    </Grid>
  );
};

export default PizzaListLoader;
