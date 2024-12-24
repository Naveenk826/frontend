import productServices from "../services/productServices";
const { useState, useEffect } = require("react");
const { default: Products } = require("./products");

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await productServices.Products();
      setProducts(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="container">
      {products.map((product, index) => (
        <Products key={index} data={product} />
      ))}
    </div>
  );
};

export default ProductsList;
