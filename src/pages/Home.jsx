import React from "react";
import Nav from "../components/Nav";
import Button from "../components/Button";
import HomeImg from "../assets/images/True ui/Onboarding/Welcome.jpg";
import HomeBottomImg from "../assets/images/beans-image.png";
import SearchIcon from "../assets/icons/search_google.svg";
import ItemCardRender from "../components/CategoryComponent/CategoryCardRender.jsx";
import ChefSpecialRender from "../components/ChefSpecialComponent/ChefSpecialRender.jsx";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleViewCategories = () => {
    navigate("/explore");
  };
  return (
    <main className="bg-[#F3F4F6]">
      <Nav />
      <div className="relative h-[765px] lg:h-auto">
        {/* Hero Div */}

        <div className="relative h-full lg:h-auto">
          <img
            className="h-full w-full lg:object-cover object-cover"
            src={HomeImg}
            alt="Food Img"
          />
          <div className="absolute inset-0 z-5 bg-black/35 lg:bg-black/50" />
          <div className="absolute inset-0 flex flex-col mt-[265px] lg:mt-[220px] z-10 pl-2 lg:pl-14">
            <h1 className="text-[32px] lg:text-[48px] lg:mr-120 text-white font-bold leading-tight">
              The Heart of Nigerian Home Cooking
            </h1>
            <p className="text-white lg:text-[32px] mt-4 lg:mt-6 mb-6 lg:mb-8 font-medium lg:font-bold">
              Handcrafted with passion, delivered with care.
            </p>
            <Button className="py-3 text-[14px] w-[215px]" variant="secondary">
              Discover what's new
            </Button>
          </div>
        </div>

        {/* Search Div */}

        <div className="absolute w-[90vw] lg:w-[80vw] bottom-[-15px] lg:bottom-[-30px] lg:left-[100px] left-[20px] z-20 bg-white flex items-center px-4 gap-2 lg:gap-4 rounded-[8px] h-[38px] lg:h-14 lg:py-8 shadow shadow-lg">
          <img className="w-10" src={SearchIcon} alt="Search Icon" />
          <input
            className="w-full py-2 focus:outline-none placeholder:text-[#1F2937] font-semibold lg:text-[24px]"
            type="search"
            placeholder="What are you craving for today?"
          />
        </div>
      </div>

      {/* Popular Categories */}

      <section className="lg:mt-[150px] mt-[75px] w-[88vw] mx-auto">
        <h2 className="text-center text-[24px] lg:text-[32px] font-semibold lg:font-bold">
          Popular Categories
        </h2>

        {/* Render Category */}

        <ItemCardRender className="grid lg:grid-cols-3 gap-10 lg:gap-12 mt-6 lg:mt-12" />
        <div className="flex lg:hidden justify-center mt-12">
          <button
            onClick={handleViewCategories}
            className="border-none text-[16px] font-regular text-[#1E88E5] hover:text-[#1E55E5] transition duration-300 ease-in-out"
          >
            View All Categories
          </button>
        </div>
      </section>

      {/* Chef's Specials */}

      <section className="lg:mt-[150px] w-[88vw] mx-auto mt-40 lg:mt-28">
        <h2 className="text-center text-[24px] lg:text-[32px] font-semibold lg:font-bold">
          Chef's Specials
        </h2>

        {/* Render Chef's Special */}

        <ChefSpecialRender className="grid lg:grid-cols-3 gap-10 lg:gap-12 mt-6 lg:mt-12" />

        <div className="flex lg:hidden justify-center mt-12">
          <button
            onClick={handleViewCategories}
            className="border-none text-[16px] font-regular text-[#1E88E5] hover:text-[#1E55E5] transition duration-300 ease-in-out"
          >
            View All Categories
          </button>
        </div>
      </section>

      {/* Bottom Hero */}

      <div className="relative mt-25 lg:mt-40 h-[656px] lg:h-auto">
        <img
          className="h-full w-full object-cover"
          src={HomeBottomImg}
          alt="Food Img"
        />
        <div className="absolute inset-0 z-5 bg-black/50" />
        <div className="absolute inset-0 flex flex-col mt-[182px] lg:mt-[185px] z-10 pl-4 lg:pl-14">
          <h1 className="text-[32px] lg:text-[48px] text-white font-bold lg:font-extrabold leading-tight">
            Introducing Our New Menu Additions!
          </h1>
          <p className="text-white text-[20px] lg:text-[24px] mt-2 mb-3 lg:mb-2 font-semibold mr-8 lg:mr-140">
            Explore exciting new dishes, crafted with the freshest ingredients
            and authentic Nigerian flavors. Limited time offer!
          </p>
          <Button
            className="py-[15px] lg:py-3 text-[16px] lg:text-[14px] w-[215px]"
            variant="secondary"
          >
            Discover what's new
          </Button>
        </div>
      </div>
      {/* Footer */}

      <div className="hidden lg:block">
        <Footer />
      </div>
    </main>
  );
};

export default Home;
