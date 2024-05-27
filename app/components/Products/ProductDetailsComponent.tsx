import { ICommonComponentInterface } from "@/app/Interfaces/common.interface";
import { IProduct } from "@/common/productslist.static.data";
import React from "react";
import ProductDetailsImageViewer from "./ProductDetailsImageViewer";

interface IProductDetailsComponent extends ICommonComponentInterface {
  product: IProduct;
}

const ProductDetailsComponent: React.FC<IProductDetailsComponent> = ({
  className,
  product,
}) => {
  return (
    <section
      className={`${className} product-details max-w-[1200px] w-full flex items-center justify-center flex-wrap`}
    >
      <div className="sm:basis-8/12 md:basis-5/12">
        <ProductDetailsImageViewer images={product.images || []} />
      </div>
      <div className="basis-full sm:basis-8/12 md:basis-7/12 flex flex-col">
        <div className="h-full flex flex-col justify-center pt-10 md:p-10 md:pl-20 text-2xl">
          <h2 className="font-bold">{product.title}</h2>
          <p className="content-text text-base mt-4">{product.description}</p>
          <ul className="content-text text-sm list-disc mt-4 pl-4">
            {product.featureList?.map((feature, index) => (
              <li key={index + 1}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-4 mt-1">
          <div
            className="h-0"
            style={{
              paddingBlock: "50%",
              overflow: "hidden",
              position: "relative",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsComponent;
