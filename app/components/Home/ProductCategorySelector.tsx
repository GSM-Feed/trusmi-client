import { ICommonComponentInterface } from "@/app/Interfaces/common.interface";
import { getPlaceholderSVG, toBase64 } from "@/common/common.functions";
import Image from "next/image";
import Link from "next/link";
import React, { ReactHTMLElement } from "react";

const selectorItems = [
  {
    image: "/images/productCatgories/mobile-accesories.png",
    title: "Mobile phone accessories",
    link: "/products?category=mobile-accessories",
  },
  {
    image: "/images/productCatgories/computer-accesories.png",
    title: "Computer accessories",
    link: "/products?category=computer-accessories",
  },
  {
    image: "/images/productCatgories/auto-accesories.png",
    title: (
      <>
        Auto <br /> accessories
      </>
    ),
    link: "/products?category=auto-accessories",
  },
  {
    image: "/images/productCatgories/mini-home-appliances.png",
    title: "Mini home appliances",
    link: "/products?category=home-appliances",
  },
  {
    image: "/images/productCatgories/travel-electonics-accesories.png",
    title: "Travel electronic accessories",
    link: "/products?category=travel-electronic-accessories",
  },
  {
    image: "/images/productCatgories/electronic-beauty.png",
    title: "Electronic beauty care products",
    link: "/products?category=electronic-beauty-products",
    hideOnList: true,
  },
  {
    image: "/images/productCatgories/electronic-beauty.png",
    title: "All",
    link: "/products",
    showOnlyOnList: true,
  },
];

const ProductSelectorItem = ({
  image,
  title,
  link,
}: {
  image: string;
  title: any;
  link?: any;
}) => {
  return (
    <Link href={link}>
      <div className="w-full lg:w-[119px] flex flex-col items-center justify-center gap-3 transition-transform duration-200 cursor-pointer hover:scale-105">
        <Image
          src={image}
          alt={title}
          width={119}
          height={118}
          className="rounded-2xl"
          draggable={false}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            getPlaceholderSVG(119, 118)
          )}`}
        />
        <p className="text-center text-wrap text-sm leading-tight w-[110px]">
          {title}
        </p>
      </div>
    </Link>
  );
};

interface IProductCategorySelector extends ICommonComponentInterface {
  forList?: boolean;
}

const ProductCategorySelector: React.FC<IProductCategorySelector> = ({
  className,
  forList,
}) => {
  return (
    <section
      className={`${className} product-category-selector max-w-[1200px] w-full grid grid-cols-3 gap-5 lg:flex lg:justify-between`}
    >
      {selectorItems
        .filter((s) => (forList ? !s?.hideOnList : !s.showOnlyOnList))
        .map((item, index) => (
          <ProductSelectorItem
            image={item.image}
            title={item.title}
            link={item.link}
            key={index + 1}
          />
        ))}
    </section>
  );
};

export default ProductCategorySelector;
