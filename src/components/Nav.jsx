import React from "react";
import Logo from "./logo";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
import HamburgerIcon from "../assets/icons/HamburgerIcon.png";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-red-100 flex items-center justify-between px-8 py-2 lg:py-2 bg-white h-auto lg:h-[85px]">
      <div className="flex items-center gap-x-10 font-medium">
        <Logo className="text-[24px] lg:text-[40.81px]" />
        <div className="hidden lg:flex items-center justify-between gap-30">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-[#FF7A18] hover:text-[#FF6B18]" : "text-[#1f2937] hover:text-[#1f2979]"}`
            }
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-[#FF7A18] hover:text-[#FF6B18]" : "text-[#1f2937] hover:text-[#1f2979]"}`
            }
            to="/explore"
          >
            Explore
          </NavLink>
          <NavLink to="">My Orders</NavLink>
          <NavLink to="">Account</NavLink>
        </div>
      </div>
      <Button
        onClick={() => navigate("/signin")}
        className="w-[160px] py-[15px] hidden lg:flex self-end"
        type="button"
        variant="secondary"
      >
        Login
      </Button>
      <button className="w-[25px] inline-block lg:hidden">
        <img src={HamburgerIcon} alt="toggle-icon" />
      </button>
    </nav>
  );
};

export default Nav;
