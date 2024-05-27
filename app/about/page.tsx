import { Metadata } from "next";
import AboutImageTextContent from "../components/About/AboutImageTextContent";
import AboutMainContentText from "../components/About/AboutMainContentText";
import GotAQuestion from "../components/Home/GotAQuestion";
import HomeBackgroundEffectSpots from "../components/Home/HomeBackgroundEffectSpots";
import HomeProductsCarousel from "../components/Home/HomeProductsCarousel";
import HomeTestimonial from "../components/Home/Testomonial/HomeTestomonial";

export const metadata: Metadata = {
  title: "Trusmi | About",
  description:
    "At Trusmi, our mission is simple: to offer the best quality products at the most affordable prices. Founded on the principles of innovation and user satisfaction, we’ve grown into a trusted name in the electronics industry. Learn more about our journey, our values, and the team behind Trusmi.",
};

export default function About() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <HomeBackgroundEffectSpots count={7} />
        <AboutMainContentText className="mb-14 lg:mb-28 mt-16 lg:mt-24 z-10" />
        <AboutImageTextContent className="mb-14 lg:mb-28 z-10" />
        <HomeProductsCarousel className="mb-14 lg:mb-28 z-10" />
        <HomeTestimonial className="mb-14 lg:mb-28 z-10" />
        <GotAQuestion className="mb-16 lg:mb-16 z-10" />
      </div>
    </>
  );
}
