import axios from "axios";

const URL = "https://mediliver-pharmacy.onrender.com";

//get products
const allProduct = async () => {
  const response = await axios.get(`${URL}/api/products`);

  return response.data;
};

//get single product
const singleProduct = async (id) => {
  const response = await axios.get(`${URL}/api/products/${id}`);

  return response.data;
};

//upload product
const uploadProduct = async (formData) => {
  const response = await axios.get(`${URL}/api/products`, formData);

  return response.data;
};

//update product
const updateProduct = async (formData) => {
  const response = await axios.get(`${URL}/api/products`, formData);

  return response.data;
};

//delete product
const deleteProduct = async (id) => {
  const response = await axios.get(`${URL}/api/products/${id}`);

  return response.data;
};

const productService = {
  allProduct,
  singleProduct,
  uploadProduct,
  updateProduct,
  deleteProduct,
};

export default productService;
