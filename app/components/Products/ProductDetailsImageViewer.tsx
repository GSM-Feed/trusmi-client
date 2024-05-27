"use client";
import { ICommonComponentInterface } from "@/app/Interfaces/common.interface";
import { getPlaceholderSVG, toBase64 } from "@/common/common.functions";
import Image from "next/image";
import React, { useState } from "react";

interface IProductDetailsImageViewer extends ICommonComponentInterface {
  images: string[];
}

const ProductDetailsImageViewer: React.FC<IProductDetailsImageViewer> = ({
  images,
}) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="flex flex-col w-full">
      {
        <Image
          src={images?.[activeImage]}
          alt={`Product Image`}
          width={500}
          height={500}
          draggable={false}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            getPlaceholderSVG(500, 500)
          )}`}
          className="rounded-2xl border border-borderCLight w-full"
        />
      }
      <div className="grid grid-cols-4 gap-4 mt-4">
        {images?.map(
          (image, index) =>
            index !== activeImage && (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => setActiveImage(index)}
              >
                <Image
                  src={image}
                  alt={`Product Image ${index}`}
                  width={100}
                  height={100}
                  draggable={false}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    getPlaceholderSVG(100, 100)
                  )}`}
                  onClick={() => setActiveImage(index)}
                  className="rounded-2xl border border-borderCLight w-full"
                />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default ProductDetailsImageViewer;
