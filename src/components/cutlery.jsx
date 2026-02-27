import React from "react";

const Cutlery = ({ text, Img }) => {
  return (
    <div className="bg-[#F3F4F6] lg:bg-transparent p-2 lg:p-0 rounded-lg lg:rounded-none">
      <div className="flex items-center gap-4">
        <div className="p-[10px] rounded-[13px] flex items-center justify-center bg-[#FFE1C4]">
          <img className="w-[24px] h-[24px]" src={Img} alt="cutlery" />
        </div>
        <p className="text-[16px] font-medium">{text}</p>
      </div>
    </div>
  );
};

export default Cutlery;
