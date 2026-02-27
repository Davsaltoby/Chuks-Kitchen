import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/footer";
import CategoryTitleRender from "../components/MenuTitleList/TitleRender";
import Product from "../components/OrderCardComponent/Categories/products";
import ExploreHero from "../assets/images/exploreHero.png";
import MobileHero from "../assets/images/True ui/Onboarding/Welcome.jpg";

const Explore = () => {
  const [isDown, setIsDown] = useState(true);

  const handleMenuClick = () => {
    // setIsDown(!isDown);
  };
  return (
    <main className="bg-[#F3F4F6] pb-8 lg:pb-0">
      <Nav />
      <div className="relative">
        <div className="relative h-[765px] lg:h-auto">
          <img
            className="hidden lg:inline-block h-full w-full object-cover"
            src={ExploreHero}
            alt="Food Img"
          />

          {/* Mobile Image */}
          <img
            className="lg:hidden h-full w-full object-cover"
            src={MobileHero}
            alt="Explore Foods Mobile Image"
          />
          <div className="absolute inset-0 z-5 bg-black/35 lg:bg-black/50" />
          <div className="absolute inset-0 flex flex-col mt-65 lg:mt-[235px] z-10 pl-5 lg:pl-14">
            <h1 className="text-[32px] lg:text-[48px] lg:mr-180 text-white font-bold">
              Chuks Kitchen
            </h1>
            <p className="text-white lg:text-[24px] mt-5 lg:mt-2 mb-8 font-medium">
              Chuks Kitchen Nigerian Home Cooking
            </p>
          </div>
        </div>
        {/* Menu Categories */}
        <div
          className={`bg-white lg:w-[95vw] mx-auto lg:rounded-t-[8px] mb-8 lg:my-20 ${isDown ? "pb-4" : ""} absolute lg:static w-full lg:w-auto top-125 z-100`}
        >
          <h2 className="font-semibold text-[24px] py-6 block pl-6">
            <button
              className="w-full text-left cursor-pointer"
              onClick={handleMenuClick}
              title={`${isDown ? "" : "Select Menu Category"}`}
            >
              Menu Categories
            </button>
          </h2>
          {isDown && (
            <CategoryTitleRender className="text-[24px] font-medium flex flex-col gap-2" />
          )}
        </div>
      </div>

      {/* Popular Category */}

      <section className="w-[95vw] lg:w-[92vw] mt-55 lg:mt-0 mx-auto mb-14 lg:mb-12">
        <h3 className="lg:text-[32px] font-semibold lg:font-bold mb-2 lg:mb-4">
          Popular
        </h3>
        <Product category="popular" />

        {/* View All Categories */}
        <div className="flex lg:hidden justify-center mt-12">
          <button
            onClick=""
            className="border-none text-[16px] font-regular text-[#1E88E5] hover:text-[#1E55E5] transition duration-300 ease-in-out"
          >
            View All Categories
          </button>
        </div>
      </section>

      {/* Jollof RIce & Entrees */}

      <section className="w-[95vw] lg:w-[92vw] mx-auto mb-14 lg:mb-12">
        <h3 className="lg:text-[32px] font-semibold lg:font-bold mb-2 lg:mb-4">
          Jollof Rice & Entrees
        </h3>
        <Product category="jollofRice" />

        {/* View All Categories */}

        <div className="flex lg:hidden justify-center mt-12">
          <button
            onClick=""
            className="border-none text-[16px] font-regular text-[#1E88E5] hover:text-[#1E55E5] transition duration-300 ease-in-out"
          >
            View All Categories
          </button>
        </div>
      </section>

      {/* Swallow & Soups */}

      <section className="w-[95vw] lg:w-[92vw] mx-auto lg:mb-20">
        <h3 className="lg:text-[32px] font-semibold lg:font-bold mb-2 lg:mb-4">
          Swallow & Soups
        </h3>
        <Product category="swallow" />

        {/* View All Categories */}

        <div className="flex lg:hidden justify-center mt-12">
          <button
            onClick=""
            className="border-none text-[16px] font-regular text-[#1E88E5] hover:text-[#1E55E5] transition duration-300 ease-in-out"
          >
            View All Categories
          </button>
        </div>
      </section>

      {/* Empty white background div */}
      <div className="hidden lg:block w-full h-[160px] bg-white"></div>

      {/* Footer */}
      <div className="hidden lg:block">
        <Footer />
      </div>
    </main>
  );
};

export default Explore;
