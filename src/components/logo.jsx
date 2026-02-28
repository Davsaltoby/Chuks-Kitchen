import React from "react";
import { NavLink } from "react-router-dom";

const Logo = ({ className = "" }) => {
  // const sizes = {
  //   primary: `text-[40.81px]`,
  //   secondary: `text-[37.02px]`,
  //   tertiary: `text-[24px]`,
  // };
  return (
    <NavLink
      to="/home"
      className={`chuks-logo leading-none text-[#FF7A18] ${className}`}
    >
      Chuks Kitchen
    </NavLink>
  );
};

export default Logo;
