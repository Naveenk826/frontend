import { useEffect } from "react";
import useOnline from "../utils/customHooks/useOnline";
import { priceFormat } from "../utils/priceFormat";

const Products = ({ data }) => {
  const isOnline = useOnline();
  useEffect(() => {
    console.log(isOnline);
  }, [isOnline]);
  return (
    <div className="product-card">
      <img
        src={data?.image}
        alt={data?.title}
        className="product-image"
        width={200}
      />
      <h3 className="product-title">{data?.title}</h3>
      <p className="product-category">{data?.category}</p>
      <p className="product-description">{data?.description}</p>
      <div className="product-rating">
        <span>
          Rating: {data?.rating?.rate} ({data?.rating?.count} reviews)
        </span>
      </div>
      <p className="product-price">{priceFormat(data?.price)}</p>
    </div>
  );
};

export default Products;
