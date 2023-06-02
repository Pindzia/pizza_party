import PizzaLineLoader from "../../organisms/menu/PizzaLineLoader";
import PizzaListLoader from "../../organisms/menu/PizzaListLoader";

const PizzaMenuLoader = () => {
  return (
    <>
      <PizzaLineLoader skeletonCount={6} />
      <PizzaLineLoader />
      <PizzaListLoader />
    </>
  );
};

export default PizzaMenuLoader;
