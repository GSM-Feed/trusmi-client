import React from "react";
import { ICommonComponentInterface } from "@/app/Interfaces/common.interface";
import Image from "next/image";
import { getPlaceholderSVG, toBase64 } from "@/common/common.functions";

const selectorItems = [
  {
    image1_url: "/images/horizontalCardImages/card-1-1.png",
    image2_url: "/images/horizontalCardImages/card-1-2.png",
    title: "Trusmi Tungsten Gold",
    subtitle: "USB-C to USB-C Cable 100W",
    description:
      "Trusmi comes from our main belief in putting users first. We’re really passionate about making simple products with easy designs and high-quality materials that.",
  },
  {
    image1_url: "/images/horizontalCardImages/card-2-1.png",
    image2_url: "/images/horizontalCardImages/card-2-2.png",
    title: "Trusmi Cube Pro",
    subtitle: "3 Ports Fast Charger 65W",
    description:
      "Trusmi comes from our main belief in putting users first. We’re really passionate about making simple products with easy designs and high-quality materials that.",
  },
  {
    image1_url: "/images/horizontalCardImages/card-3-1.png",
    image2_url: "/images/horizontalCardImages/card-3-2.png",
    title: "Trusmi MagPro",
    subtitle: "10000 mAh 20W",
    description:
      "Trusmi comes from our main belief in putting users first. We’re really passionate about making simple products with easy designs and high-quality materials that.",
  },
  {
    image1_url: "/images/horizontalCardImages/card-4-1.png",
    image2_url: "/images/horizontalCardImages/card-4-2.png",
    title: "Trusmi Cube",
    subtitle: "2 Ports Fast Charger 35W",
    description:
      "Trusmi comes from our main belief in putting users first. We’re really passionate about making simple products with easy designs and high-quality materials that.",
  },
];

interface IHomeHorizontalCardsSection extends ICommonComponentInterface {}
interface IHomeHorizontalCardsItem {
  reversed?: boolean;
  image1_url: string;
  image2_url: string;
  title: string;
  subtitle: string;
  description: string;
}

const HomeHorizontalCardsItem: React.FC<IHomeHorizontalCardsItem> = ({
  reversed = false,
  image1_url,
  image2_url,
  title,
  subtitle,
  description,
}) => {
  return (
    <div
      className={`border border-borderCLight bg-white rounded-2xl flex w-full gap-4 relative justify-between reveal-card flex-col ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="flex-shrink-0">
        <Image
          src={image1_url}
          alt={`Image of ${title}`}
          className="rounded-2xl w-full h-[200px] object-cover lg:h-auto lg:w-auto"
          width={350}
          height={350}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            getPlaceholderSVG(350, 350)
          )}`}
        />
      </div>
      <div className="flex-shrink-0">
        <Image
          src={image2_url}
          alt={`Image of ${title}`}
          className="rounded-2xl hidden lg:block"
          width={350}
          height={350}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            getPlaceholderSVG(350, 350)
          )}`}
        />
      </div>
      <div
        className={`text-center lg:text-left flex flex-col justify-center px-10 pb-10 lg:pb-0`}
      >
        <h2 className="text-primary font-bold text-3xl">{title}</h2>
        <h3 className="text-secondary font-bold mb-3">{subtitle}</h3>
        <p className="content-text max-w-[350px]">{description}</p>
      </div>
      <div className="absolute flex items-center justify-center w-full bottom-0 translate-y-1/2">
        <button className="btn btn-outline btn-primary btn-sm rounded-full font-normal bg-white min-w-32">
          Learn more
        </button>
      </div>
    </div>
  );
};

const HomeHorizontalCardsSection: React.FC<IHomeHorizontalCardsSection> = ({
  className,
}) => {
  return (
    <section
      className={`${className} home-main-content-text max-w-[1200px] w-full text-center flex flex-col items-center gap-16`}
    >
      {selectorItems.map((item, index) => (
        <HomeHorizontalCardsItem
          key={index}
          {...item}
          reversed={index % 2 != 0}
        />
      ))}
    </section>
  );
};

export default HomeHorizontalCardsSection;
