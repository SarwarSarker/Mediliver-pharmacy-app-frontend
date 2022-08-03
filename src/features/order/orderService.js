import axios from "axios";

const URL = "https://mediliver.herokuapp.com";

// Create new order
const createOrder = async (orderData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(`${URL}/api/orders`, orderData, config);
  return response.data;
};

const orderService = {
  createOrder,
};

export default orderService;
