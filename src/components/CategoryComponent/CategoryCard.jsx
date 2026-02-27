import React from "react";

const ItemCard = ({ itemTitle, itemImg, itemImgDescription, itemId }) => {
  return (
    <li
      key={itemId}
      className="bg-white shadow shadow-lg rounded-[14px] p-[5px] lg:p-[1px] w-full"
    >
      <div className="">
        <img className="w-full" src={itemImg} alt={itemImgDescription} />
      </div>
      <div className="flex justify-center items-center p-10">
        <h3 className="text-[14px] lg:text-[24px] font-medium lg:font-semibold">
          {itemTitle}
        </h3>
      </div>
    </li>
  );
};

export default ItemCard;
