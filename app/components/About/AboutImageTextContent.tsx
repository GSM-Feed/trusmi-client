import { ICommonComponentInterface } from "@/app/Interfaces/common.interface";
import { getPlaceholderSVG, toBase64 } from "@/common/common.functions";
import Image from "next/image";
import React from "react";

const selectorItems: IAboutImageTextContentItemContent[] = [
  {
    image: "/images/aboutImageText/about-1.png",
    title: "About Us",
    content:
      "At Trusmi, our mission is simple: to offer the best quality products at the most affordable prices. Founded on the principles of innovation and user satisfaction, we’ve grown into a trusted name in the electronics industry. Learn more about our journey, our values, and the team behind Trusmi.",
  },
  {
    image: "/images/aboutImageText/about-2.png",
    title: "Products",
    content:
      "Discover our diverse range of products tailored to meet your needs. Whether you’re looking for sleek mobile phone accessories, convenient auto accessories, or innovative beauty care products, Trusmi has you covered. Explore each category to find the perfect blend of style, functionality, and affordability.",
  },
  {
    image: "/images/aboutImageText/about-3.png",
    title: "Design Philosophy",
    content:
      "Our design philosophy is centered around simplicity, functionality, and elegance. We believe that technology should enhance your life without adding unnecessary complexity. That’s why we prioritize minimalist designs that are intuitive to use and aesthetically pleasing.",
  },
  {
    image: "/images/aboutImageText/about-4.png",
    title: "Global Coverage",
    content:
      "Trusmi products are available worldwide, with shipping options to suit your needs. Check out our interactive map to see where you can purchase Trusmi products near you. Experience the Trusmi difference no matter where you are in the world.",
  },
];

interface IAboutImageTextContent extends ICommonComponentInterface {}
interface IAboutImageTextContentItemContent {
  image: string;
  title: string;
  content: string | JSX.Element;
}
interface IAboutImageTextContentItem extends IAboutImageTextContentItemContent {
  reversed?: boolean;
}

const AboutImageTextContentItem: React.FC<IAboutImageTextContentItem> = ({
  content,
  image,
  title,
  reversed = false,
}) => {
  return (
    <div
      className={`w-full flex flex-col lg:flex-row reveal-card ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      <Image
        src={image}
        alt={"About Us - " + title}
        width={500}
        height={320}
        className="rounded-2xl flex-shrink-0 w-full lg:w-auto"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          getPlaceholderSVG(500, 320)
        )}`}
      />
      <div
        className={`flex flex-col justify-center lg:text-left py-10 lg:py-0 lg:p-10 ${
          reversed ? "lg:pl-0" : "lg:pr-20"
        }`}
      >
        <h2 className="default-text font-bold text-lg mb-2">{title}</h2>
        <p className="content-text">{content}</p>
      </div>
    </div>
  );
};

const AboutImageTextContent: React.FC<IAboutImageTextContent> = ({
  className,
}) => {
  return (
    <section
      className={`${className} max-w-[1200px] w-full text-center flex flex-col items-center`}
    >
      {selectorItems.map((item, index) => (
        <AboutImageTextContentItem
          key={index + 1}
          {...item}
          reversed={index % 2 != 0}
        />
      ))}
    </section>
  );
};

export default AboutImageTextContent;
