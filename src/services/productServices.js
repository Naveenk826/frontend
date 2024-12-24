import axios from "axios";

const API_URL = "http://localhost:7000/products";
// const API_URL = "https://fakestoreapi.com/products";

const Products = async () => {
  const response = await axios.get(`${API_URL}`, {
    withCredentials: true,
  });
  return response.data;
};

const productServices = {
  Products,
};

export default productServices;
