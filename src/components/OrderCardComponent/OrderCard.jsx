import React from "react";
import cross from "../../assets/icons/cross.png";

const OrderCard = ({ image, title, description, price }) => {
  return (
    <li className="lg:block flex items-center bg-white shadow shadow-lg rounded-[14px] p-[5px] lg:p-[1px]">
      <div className="w-full lg:w-auto h-full lg:h-auto flex-1">
        <img
          className="rounded-lg lg:rounded-tl-[14px] lg:rounded-tr-[14px] w-full h-full object-fit lg:object-cover"
          src={image}
          alt={title}
        />
      </div>
      <div className="mt-1 lg:mt-6 ml-3 lg:ml-0 lg:px-4 lg:pb-10 flex-2">
        <h3 className="lg:text-[22px] font-semibold">{title}</h3>
        <p className="mt-1 lg:mt-2 text-[12px] lg:text-[16px] lg:font-medium">
          {description}
        </p>
        <div className="flex items-center justify-between mt-3 mb-1 lg:mb-0 lg:mt-10">
          <span className="text-[#FF7A18] font-medium">{price}</span>
          <button className="bg-[#FF7A18] rounded-full flex items-center justify-center">
            <img className="" src={cross} alt="add item" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default OrderCard;
