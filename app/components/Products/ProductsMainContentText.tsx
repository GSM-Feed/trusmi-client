import { ICommonComponentInterface } from "@/app/Interfaces/common.interface";
import React from "react";

interface IProductsMainContentText extends ICommonComponentInterface {}

const ProductsMainContentText: React.FC<IProductsMainContentText> = ({
  className,
}) => {
  return (
    <section
      className={`${className} home-main-content-text max-w-[1200px] w-full text-center flex flex-col items-center`}
    >
      <h1 className="text-primary text-3xl font-bold mb-3">Products</h1>
      <p className="content-text max-w-[770px]">
        Discover our diverse range of products tailored to meet your needs.
        Whether you’re looking for sleek mobile phone accessories, convenient
        auto accessories, or innovative beauty care products, Trusmi has you
        covered. Explore each category to find the perfect blend of style,
        functionality, and affordability.
      </p>
    </section>
  );
};

export default ProductsMainContentText;
