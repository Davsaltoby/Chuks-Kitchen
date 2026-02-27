import React from "react";
import Logo from "./logo";
import ArrowUp from "../assets/icons/arrow-left 1.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleScrollPosition = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="flex flex-col gap-12 bg-[#62412E] py-[65px] px-[100px]">
      <div className="flex justify-between relative">
        <div className="flex-1">
          <Logo className="text-[37.02px]" />
          <p className="text-[20px] text-white footer-paragraph mr-[80px] mt-2">
            Bringing the authentic flavors of Nigerian home cooking to your
            table, with passion and care.
          </p>
        </div>
        <div className="flex-1">
          <span className="text-white text-[20px] quick-link">Quick Links</span>
          <ul className="text-[12px] footer-list-align mt-4 text-white/75">
            <li className="">
              <Link className="hover:text-white/95" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-white/95" to="/explore">
                Explore
              </Link>
            </li>
            <li>My Order</li>
            <li>Account</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex-1">
          <span className="text-[20px] contact-us text-white">Contact Us</span>
          <ul className="text-[12px] footer-list-align mt-4 text-white/75">
            <li>
              <a className="hover:text-white/95" href="tel:+2348012345678">
                +2348012345678
              </a>
            </li>
            <li>
              <a
                className="hover:text-white/95"
                href="mailto:hello@chukskitchen.com"
              >
                hello@chukskitchen.com
              </a>
            </li>
            <li>123 Taste Blvd, Lagos, Nigeria</li>
          </ul>
        </div>
        <ul className="flex-1 flex flex-col text-[12px] footer-list-align text-white/75">
          <li>
            <a className="hover:text-white/95" href="">
              Facebook
            </a>
          </li>
          <li>
            <a className="hover:text-white/95" href="">
              Twitter
            </a>
          </li>
          <li>
            <a className="hover:text-white/95" href="">
              Linkedin
            </a>
          </li>
          <li>
            <a className="hover:text-white/95" href="">
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-[12px] text-white/75 footer-copyright">
          &copy; 2020 Lift Media. All rights reserved.
        </p>
        <button
          onClick={handleScrollPosition}
          className="bg-[#0081FE] w-[52px] h-[52px] flex justify-center items-center rounded-full cursor-pointer hover:bg-[#1E55E5] transition delay-100 duration-300 ease-in-out"
        >
          <img src={ArrowUp} alt="Scroll to top" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
