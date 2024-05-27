import { ICommonComponentInterface } from "@/app/Interfaces/common.interface";
import { getPlaceholderSVG, toBase64 } from "@/common/common.functions";
import { IProduct, PRODUCT_LIST } from "@/common/productslist.static.data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { TbDatabaseSearch } from "react-icons/tb";

interface IProductListComponent extends ICommonComponentInterface {
  pagination?: number;
  page?: number;
  category?: string;
}

const ProductListItem: React.FC<IProduct> = ({
  id,
  slug,
  images,
  title,
  category,
  tag,
}) => {
  return (
    <Link href={`/products/${slug}`}>
      <div className="flex flex-col w-full border border-borderCLight bg-white rounded-2xl px-[10px] py-[10px] md:px-[15px] md:py-[20px] transition-transform duration-300 cursor-pointer hover:scale-105 relative reveal-card">
        <Image
          src={images?.[0]}
          alt=""
          width={345}
          height={345}
          draggable={false}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            getPlaceholderSVG(345, 345)
          )}`}
        />
        <h6 className="md:px-3 font-normal text-secondary text-center text-sm md:text-base">
          {title}
        </h6>
        {tag && (
          <span className="badge badge-accent bg-[#E9FBFA] border-[#E9FBFA] text-primary px-4 py-3 capitalize text-xs font-medium absolute right-4 top-4">
            {tag}
          </span>
        )}
      </div>
    </Link>
  );
};

const ProductListComponent: React.FC<IProductListComponent> = ({
  className,
  pagination = 9,
  page = 1,
  category = null,
}) => {
  let products = PRODUCT_LIST;

  if (category) {
    products = products?.filter((item) => item?.category === category);
  }

  // Page Links Generator
  const pageLinks = [];
  const urlAppend = category ? `&category=${category}` : "";
  for (let i = 1; i <= Math.ceil(products?.length / pagination); i++) {
    pageLinks.push({
      page: i,
      link: `/products?page=${i}${urlAppend}`,
      current: i == page,
    });
  }

  let prevLink = null;
  if (page > 1) {
    prevLink = {
      page: "prev",
      link: `/products?page=${Number(page) - 1}${urlAppend}`,
      current: false,
    };
  }

  let nextLink = null;
  if (page < Math.ceil(products?.length / pagination)) {
    nextLink = {
      page: "next",
      link: `/products?page=${Number(page) + 1}${urlAppend}`,
      current: false,
    };
  }

  // Pagination
  products = products?.slice((page - 1) * pagination, page * pagination);

  return (
    <>
      <section className={`${className} products-list max-w-[1200px] w-full`}>
        {products?.length > 0 && (
          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {products?.map((item, index) => (
              <ProductListItem {...item} key={index + 1} />
            ))}
          </div>
        )}

        {products?.length < 1 && (
          <div>
            <div className="flex items-center justify-center text-6xl mb-3">
              <TbDatabaseSearch />
            </div>
            <h6 className="text-center text-secondary text-1xl font-normal">
              No Products Found
            </h6>
          </div>
        )}

        {pageLinks?.length > 0 && (
          <ul className="flex justify-center w-full">
            {prevLink?.link ? (
              <Link href={prevLink.link}>
                <li
                  className={`min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px] flex items-center justify-center text-sm ${
                    prevLink ? "" : "text-[#8F8F8F]"
                  }`}
                >
                  <MdArrowBackIos />
                </li>
              </Link>
            ) : (
              <li
                className={`min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px] flex items-center justify-center text-sm ${
                  prevLink ? "" : "text-[#8F8F8F]"
                }`}
              >
                <MdArrowBackIos />
              </li>
            )}

            {pageLinks.map((link, index) => (
              <Link key={index + 1} href={link?.link}>
                <li
                  className={`min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px] flex items-center justify-center rounded-md text-sm ${
                    link?.current ? "bg-primary text-white" : ""
                  }`}
                >
                  {link.page}
                </li>
              </Link>
            ))}
            {nextLink?.link ? (
              <Link href={nextLink.link}>
                <li
                  className={`min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px] flex items-center justify-center text-sm ${
                    nextLink ? "" : "text-[#8F8F8F]"
                  }`}
                >
                  <MdArrowForwardIos />
                </li>
              </Link>
            ) : (
              <li
                className={`min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px] flex items-center justify-center text-sm ${
                  nextLink ? "" : "text-[#8F8F8F]"
                }`}
              >
                <MdArrowForwardIos />
              </li>
            )}
          </ul>
        )}
      </section>
    </>
  );
};

export default ProductListComponent;
