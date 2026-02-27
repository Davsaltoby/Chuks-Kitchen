import imgP1 from "./../../../assets/images/Property 1=Default.png";
import imgP2 from "./../../../assets/images/image 8.png";
import imgP3 from "./../../../assets/images/image 7.png";
import imgP4 from "./../../../assets/images/image 5.png";
import imgP5 from "./../../../assets/images/image 6.png";
import imgJ1 from "./../../../assets/images/image 3.png";
import imgS1 from "./../../../assets/images/image 1.png";
import imgS2 from "./../../../assets/images/image 2.png";

const ProductData = {
  popular: [
    {
      id: 1,
      image: imgP1,
      title: "Jollof Rice & Fried Chicken",
      description:
        "Our signature Jollof rice, served with crispy fried chicken and plantain.",
      price: "₦3,500",
      category: "popular",
    },
    {
      id: 2,
      image: imgP2,
      title: "Eba & Egusi Soup (Goat Meat)",
      description:
        "Hearty Egusi soup with tender goat meat, served with soft Eba.",
      price: "₦3,500",
      category: "popular",
    },
    {
      id: 3,
      image: imgP3,
      title: "Pounded Yam & Edikaikong",
      description: "Traditional pounded yam with rich, leafy Edikaikong soup.",
      price: "₦3,800",
      category: "popular",
    },
    {
      id: 4,
      image: imgP4,
      title: "Peppered Snail",
      description: "Spicy and savory peppered snail, perfect as a starter.",
      price: "₦2,500",
      category: "popular",
    },
    {
      id: 5,
      image: imgP5,
      title: "Grilled Tilapia Fish",
      description: "Whole grilled tilapia seasoned with our special spices.",
      price: "₦4,500",
      category: "popular",
    },
    {
      id: 6,
      image: imgP1,
      title: "Jollof Rice & Fried Chicken",
      description:
        "Our signature Jollof rice, served with crispy fried chicken and plantain.",
      price: "₦3,500",
      category: "popular",
    },
  ],

  jollofRice: [
    {
      id: 1,
      image: imgJ1,
      title: "Jollof Rice & Smoked Fish",
      description: "Flavorful jollof rice served with perfectly smoked fish.",
      price: "₦3,500",
      category: "Jollof Rice & Entrees",
    },
    {
      id: 2,
      image: imgP1,
      title: "Party Jollof Rice (Veg)",
      description: "Vegetarian party jollof, full of rich favors.",
      price: "₦2,800",
      category: "Jollof Rice & Entrees",
    },
    {
      id: 2,
      image: imgP1,
      title: "Party Jollof Rice (Veg)",
      description: "Vegetarian party jollof, full of rich favors.",
      price: "₦3,500",
      category: "Jollof Rice & Entrees",
    },
  ],

  swallow: [
    {
      id: 1,
      image: imgS1,
      title: "Amala with Gbegiri & Ewedu",
      description:
        "Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup.",
      price: "₦3,100",
      category: "Swallow & Soups",
    },
    {
      id: 2,
      image: imgS2,
      title: "Fufu & Okra Soup (Fish)",
      description: "Light fufu served with fresh okra soup and tilapia fish.",
      price: "₦3,300",
      category: "Swallow & Soups",
    },
    {
      id: 3,
      image: imgS2,
      title: "Fufu & Okra Soup (Fish)",
      description: "Light fufu served with fresh okra soup and tilapia fish.",
      price: "₦3,500",
      category: "Swallow & Soups",
    },
  ],
};

export default ProductData;
