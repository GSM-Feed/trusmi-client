import { Metadata } from "next";
import BannerComponent from "./components/Home/Banner/BannerComponent";
import GotAQuestion from "./components/Home/GotAQuestion";
import HomeBackgroundEffectSpots from "./components/Home/HomeBackgroundEffectSpots";
import HomeHorizontalCardsSection from "./components/Home/HomeHorizontalCardsSection";
import HomeMainContentText from "./components/Home/HomeMainContentText";
import HomeProductsCarousel from "./components/Home/HomeProductsCarousel";
import HomeTestimonial from "./components/Home/Testomonial/HomeTestomonial";
import ProductCategorySelector from "./components/Home/ProductCategorySelector";

export const metadata: Metadata = {
  title: "Trusmi",
  description:
    "Our brand trusmi is dedicated to providing user-centered, high-quality electronics at the most cost-effective prices. Explore our range of products designed to enhance your lifestyle, from mobile phone accessories to mini home appliances. With Trusmi, you can trust that you’re getting top-notch products without breaking the bank.",
  keywords: [
    "trusmi",
    "electronics",
    "mobile phone accessories",
    "computer accessories",
    "auto accessories",
    "home appliances",
    "travel electronics accessories",
    "electronic beauty care accessories",
    "lifestyle",
    "affordable",
  ],
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <HomeBackgroundEffectSpots />
        <BannerComponent className="mb-20 lg:mb-28 z-10" />
        <ProductCategorySelector className="mb-20 lg:mb-28 z-10" />
        <HomeMainContentText className="mb-20 lg:mb-28 z-10" />
        <HomeHorizontalCardsSection className="mb-32 z-10" />
        <HomeProductsCarousel className="mb-20 lg:mb-28 z-10" />
        <HomeTestimonial className="mb-20 lg:mb-28 z-10" />
        <GotAQuestion className="mb-16 z-10" />
      </div>
    </>
  );
}
