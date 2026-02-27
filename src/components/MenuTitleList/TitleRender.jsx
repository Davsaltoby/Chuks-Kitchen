import React, { useState } from "react";
import categoryTitle from "./titleListData";

const CategoryTitleRender = ({ className }) => {
  const [activeCategory, setActiveCategory] = useState(categoryTitle[0].name);
  const handleActiveCategory = (name) => {
    setActiveCategory(name);
  };
  return (
    <ul className={`${className}`}>
      {categoryTitle.map(({ id, name }) => (
        <li
          className={`
            ${activeCategory === name ? "border-l-4 border-[#FF7A18] bg-[#FFE1C4]" : ""} pl-6 py-2`}
          key={id}
        >
          <button
            onClick={() => handleActiveCategory(name)}
            className="cursor-pointer w-full text-left h-full"
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryTitleRender;
