import React from "react";
import ProductData from "./ProductData";
import OrderCard from "../OrderCard";

const Product = ({ className = "", category }) => {
  return (
    <ul className={`${className} grid lg:grid-cols-3 gap-6 lg:gap-10`}>
      {ProductData[category].map(({ id, image, title, description, price }) => (
        <OrderCard
          key={id}
          image={image}
          title={title}
          description={description}
          price={price}
        />
      ))}
    </ul>
  );
};

export default Product;
