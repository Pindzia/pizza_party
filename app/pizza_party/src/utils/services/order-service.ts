//code for order service
import OrderModel from "../../models/order/order";

export default class OrderService {
  saveOrder(order: OrderModel) {
    localStorage.setItem("order", JSON.stringify(order));
  }

  deleteOrder() {
    localStorage.removeItem("order");
  }

  getOrder() {
    const order = localStorage.getItem("order");
    if (order) {
      return JSON.parse(order);
    }
    return null;
  }
}
