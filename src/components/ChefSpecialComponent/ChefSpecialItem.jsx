import React from "react";
import Button from "../Button";

const ChefSpecialItem = ({
  image,
  imageDescription,
  title,
  description,
  price,
}) => {
  return (
    <li className="bg-white shadow shadow-lg rounded-[14px] p-[5px] lg:p-[1px]">
      <div>
        <img src={image} alt={imageDescription} />
      </div>
      <div className=" mt-6 px-4 pb-10">
        <h3 className="text-[24px] lg:text-[20px] font-semibold">{title}</h3>
        <p className="mt-2 font-medium lg:font-normal">{description}</p>
        <div className="flex items-center justify-between mt-10">
          <span className="text-[#FF7A18] font-medium">{price}</span>
          <Button className="py-1 px-4" variant="secondary">
            Add to cart
          </Button>
        </div>
      </div>
    </li>
  );
};

export default ChefSpecialItem;
