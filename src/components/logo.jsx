import React from "react";

const Logo = ({ className = "" }) => {
  // const sizes = {
  //   primary: `text-[40.81px]`,
  //   secondary: `text-[37.02px]`,
  //   tertiary: `text-[24px]`,
  // };
  return (
    <span className={`chuks-logo leading-none text-[#FF7A18] ${className}`}>
      Chuks Kitchen
    </span>
  );
};

export default Logo;
