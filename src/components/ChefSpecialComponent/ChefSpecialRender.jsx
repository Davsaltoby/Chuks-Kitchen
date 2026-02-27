import React from "react";
import ChefSpecialData from "./ChefSpecialData";
import ChefSpecialItem from "./ChefSpecialItem";

const ChefSpecialRender = ({ className }) => {
  return (
    <ul className={`${className}`}>
      {ChefSpecialData.map((item) => (
        <ChefSpecialItem
          key={item.id}
          image={item.image}
          imageDescription={item.title}
          title={item.title}
          description={item.description}
          price={item.price}
        />
      ))}
    </ul>
  );
};

export default ChefSpecialRender;
