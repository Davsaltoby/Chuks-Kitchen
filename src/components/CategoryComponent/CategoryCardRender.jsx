import React from "react";
import ItemCard from "./CategoryCard.jsx";
import ItemData from "./CategoryData.js";

const ItemCardRender = ({ className }) => {
  return (
    <ul className={`${className}`}>
      {ItemData.map((item) => (
        <ItemCard
          key={item.itemId}
          itemTitle={item.itemTitle}
          itemImg={item.itemImg}
          itemImgDescription={item.ItemImgDescription}
        />
      ))}
    </ul>
  );
};

export default ItemCardRender;
