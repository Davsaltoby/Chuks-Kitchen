import React from "react";
import Button from "../Button";
const InputComponent = ({
  label,
  icon,
  icon2,
  type = "email",
  placeholder,
  IconAlt,
}) => {
  return (
    <div>
      <label className="text-[14px]" htmlFor={type}>
        {label}
      </label>
      <div className="border-[1px] border-[#BDBDBD] rounded-[8px] py-[10px] px-[16px] flex items-center gap-4 focus-within:border-[#000000] mb-[15px] mt-1">
        {icon && (
          <span className="">
            <img src={icon} alt={IconAlt} className="" />
          </span>
        )}
        <input
          className="text-[16px] focus:outline-none w-full h-full placeholder:text-[#000000]"
          type={type}
          id={type}
          placeholder={placeholder}
          required
        />
        {icon2 && (
          <Button className="border-none">
            <img src={icon2} alt="" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default InputComponent;
