import PizzaType from "../../models/menu/PizzaType";

export function generatePizzaListTypes() {
  return Object.keys(PizzaType)
    .filter((x) => !isNaN(Number(x)))
    .map((key) => {
      return {
        name: PizzaType[key as keyof typeof PizzaType] as unknown as string,
      };
    });
}
