import React from "react";
import Button from "../components/Button";
import Cutlery from "../components/cutlery";
import Logo from "../components/logo";
import OnboardingDesktopImg from "../assets/images/Onboarding/Rectangle 1.png";
import Footer from "../components/footer";
import Utensils from "../assets/icons/Vector.svg";
import Truck from "../assets/icons/truck.svg";
import { useNavigate } from "react-router-dom";
import MobileHero from "../assets/images/Rectangle 4317.png";

const Onboarding = () => {
  const navigate = useNavigate();
  return (
    <main className="w-[88vw] lg:w-full m-auto pb-10 lg:pb-0">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="">
          <img
            className="hidden lg:block w-full object-contain"
            src={OnboardingDesktopImg}
            alt="Image"
          />
          <img
            className="w-full object-cover block lg:hidden"
            src={MobileHero}
            alt="Image"
          />
        </div>
        <div className="lg:w-[43vw] mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between mt-8 gap-y-12">
            <Logo className="text-[40.81px]" />
            <Button
              variant="primary"
              className="px-[40px] lg:py-[15px] py-[11px] self-end"
              onClick={() => navigate("/signin")}
            >
              Sign In
            </Button>
          </div>

          {/* Hero Section */}
          <div className="lg:mt-[130px] mt-[10px]">
            <h2 className="font-bold text-[32px]">
              Your Authentic Taste of Nigeria
            </h2>
            <p className="mt-[25px] lg:mt-[18px] text-[16px] font-regular lg:font-medium">
              Experience homemade flavors delivered fresh to your desk or home.
              We bring the rich culinary heritage of Nigeria right to your
              doorstep.
            </p>
          </div>

          {/* Cutlery section */}
          <div className="grid lg:grid-cols-2 gap-x-[70px] gap-y-[10px] lg:gap-y-[25px] mt-[20px] lg:mt-[35px] mb-[40px]">
            <Cutlery Img={Utensils} text="Freshly Prepared" />
            <Cutlery Img={Utensils} text="Support Local Business" />
            <Cutlery Img={Truck} text="Fast & Reliable Delivery" />
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col gap-3 lg:gap-6">
            <Button variant="secondary" className="w-full py-[18px]">
              Start Your Order
            </Button>
            <Button variant="primary" className="w-full py-[18px]">
              Learn More About Us
            </Button>
          </div>

          {/* Rights Section */}
          <div className="hidden lg:flex mt-[150px] flex gap-4 text-[14px] justify-center">
            <p>&copy; 2024 Chuks Kitchen.</p>
            <ul className="flex gap-4 text-[#1E88E5]">
              <li>
                <a className="hover:text-[#1E55E5]" href="">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-[#1E55E5]" href="">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <Footer />
      </div>
    </main>
  );
};

export default Onboarding;
