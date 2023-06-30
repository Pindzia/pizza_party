import { createOrder, updateOrder } from "../../store/order-actions";
import OrderStepper from "../templates/order/OrderStepper";

const Order = () => {
  return <OrderStepper />;
};

export default Order;

export async function action({ request }) {
  const data = await request.formData();
  const orderData = data.get("orderData");
  const name = data.get("name");
  let id = "";
  if (request.method.toLowerCase() === "post")
    id = await createOrder(orderData);
  if (request.method.toLowerCase() === "put")
    await updateOrder(name, orderData);

  return { message: "Signup successful!", name: id };
}
