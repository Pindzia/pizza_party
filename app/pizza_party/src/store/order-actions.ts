import OrderModel from "../models/order/order";

// Fetch all orders
const baseURL = `https://react-http-practise-696f5-default-rtdb.europe-west1.firebasedatabase.app/orders.json`;

// Fetch all orders
export const getOrders = async () => {
  const res = await fetch(baseURL);
  const data = await res.json();

  if (res.ok) {
    return Object.keys(data).map((key) => ({ id: key, ...data[key] }));
  } else {
    console.error("Error getting orders: ", data);
  }
};

// Fetch single order by ID
export const getOrder = async (id: number) => {
  const res = await fetch(
    `https://[PROJECT-ID].firebaseio.com/orders/${id}.json`
  );
  const data = await res.json();

  if (res.ok) {
    return { id, ...data };
  } else {
    console.error("Error getting order: ", data);
  }
};

// Create new order
export const createOrder = async (order: OrderModel) => {
  const res = await fetch(baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
  const data = await res.json();

  if (res.ok) {
    return data.name;
  } else {
    return "Error creating order: " + data;
  }
};

// Update existing order
export const updateOrder = async (id: string, order: OrderModel) => {
  const res = await fetch(
    `https://[PROJECT-ID].firebaseio.com/orders/${id}.json`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    }
  );
  const data = await res.json();

  if (res.ok) {
    return { id, ...data };
  } else {
    console.error("Error updating order: ", data);
  }
};

// Delete order by ID
export const deleteOrder = async (id: number) => {
  const res = await fetch(
    `https://[PROJECT-ID].firebaseio.com/orders/${id}.json`,
    { method: "DELETE" }
  );
  const data = await res.json();

  if (res.ok) {
    return id;
  } else {
    console.error("Error deleting order: ", data);
  }
};
