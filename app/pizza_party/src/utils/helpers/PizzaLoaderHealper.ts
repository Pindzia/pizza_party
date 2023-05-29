import Pizza from "../../models/menu/Pizza";

export function getEmptyPizzasForLoading(): Pizza[] {
  return Array.from(Array(6).keys()).map((id) => {
    return {
      id: id,
      name: "",
      description: "",
      price: 0,
      listOfIngredients: [],
      imageLink: "",
      type: 0,
    };
  });
}
