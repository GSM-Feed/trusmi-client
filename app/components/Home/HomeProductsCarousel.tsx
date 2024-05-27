import { ICommonComponentInterface } from "@/app/Interfaces/common.interface";
import Image from "next/image";
import React from "react";
import CarouselContainer from "./CarouselContainer";
import { getPlaceholderSVG, toBase64 } from "@/common/common.functions";
import Link from "next/link";
import { PRODUCT_LIST } from "@/common/productslist.static.data";

// const productItems = [
//   {
//     image: "/images/products/prod-1.png",
//     title: (
//       <>
//         <span className="text-primary">Trusmi</span> MagPro Magnetic Wireless
//         Power Bank 5000mAh 20W
//       </>
//     ),
//   },
//   {
//     image: "/images/products/prod-2.png",
//     title: (
//       <>
//         <span className="text-primary">Trusmi</span> Tungsten Gold <br /> USB-C
//         to USB-C Cable 100W
//       </>
//     ),
//   },
//   {
//     image: "/images/products/prod-3.png",
//     title: (
//       <>
//         <span className="text-primary">Trusmi</span> Cube Pro <br /> 3 Ports
//         Fast Charger 65W
//       </>
//     ),
//   },
//   {
//     image: "/images/products/prod-1.png",
//     title: (
//       <>
//         <span className="text-primary">Trusmi</span> MagPro Magnetic Wireless
//         Power Bank 5000mAh 20W
//       </>
//     ),
//   },
//   {
//     image: "/images/products/prod-2.png",
//     title: (
//       <>
//         <span className="text-primary">Trusmi</span> Tungsten Gold <br /> USB-C
//         to USB-C Cable 100W
//       </>
//     ),
//   },
//   {
//     image: "/images/products/prod-3.png",
//     title: (
//       <>
//         <span className="text-primary">Trusmi</span> Cube Pro <br /> 3 Ports
//         Fast Charger 65W
//       </>
//     ),
//   },
// ];

const HomeProductsCarouselItem = ({
  image,
  title,
  slug,
}: {
  image: string;
  title: any;
  slug: string;
}) => {
  return (
    <Link href={`/products/${slug}`}>
      <div className="flex flex-col w-[200px] lg:w-[370px] lg:min-w-[370px] border border-borderCLight bg-white rounded-2xl px-[15px] py-[20px]">
        <Image
          src={image}
          alt=""
          width={345}
          height={345}
          draggable={false}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            getPlaceholderSVG(345, 345)
          )}`}
        />
        <p className="px-3 text-secondary text-center text-sm lg:text-base font-normal">
          {title}
        </p>
      </div>
    </Link>
  );
};

interface IHomeProductsCarousel extends ICommonComponentInterface {}

const HomeProductsCarousel: React.FC<IHomeProductsCarousel> = ({
  className,
}) => {
  const productItems = PRODUCT_LIST.slice(0, 6);

  return (
    <section className={`${className} max-w-[1200px] w-full reveal-card`}>
      <CarouselContainer>
        {productItems?.map((item, index) => (
          <HomeProductsCarouselItem
            image={item.images?.[0]}
            title={item.title}
            slug={item.slug}
            key={index + 1}
          />
        ))}
      </CarouselContainer>
      <div className="flex items-center justify-center mt-9">
        <Link href='/products' className="btn btn-outline btn-primary btn-sm rounded-full font-normal bg-white min-w-32">
          View all
        </Link>
      </div>
    </section>
  );
};

export default HomeProductsCarousel;
