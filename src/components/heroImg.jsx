import React from "react";

const HeroImg = ({ image, title, description, className }) => {
  return (
    <div className="relative h-full w-full">
      <img
        className={`absolute h-full w-full object-cover ${className}`}
        src={image}
        alt="Hero"
      />
      <div className="absolute bg-[#FF7A18B2] inset-0"></div>
      <div className="absolute flex flex-col justify-center items-center inset-0 text-white text-center gap-6">
        <h1 className="text-[40px] font-bold">{title}</h1>
        <p className="text-[22px] w-[400px] px-4 font-medium">{description}</p>
      </div>
    </div>
  );
};

export default HeroImg;
