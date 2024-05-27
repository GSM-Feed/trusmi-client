import GotAQuestion from "@/app/components/Home/GotAQuestion";
import HomeBackgroundEffectSpots from "@/app/components/Home/HomeBackgroundEffectSpots";
import ProductDetailsComponent from "@/app/components/Products/ProductDetailsComponent";
import NotFound from "@/app/not-found";
import { PRODUCT_LIST } from "@/common/productslist.static.data";
import { Metadata } from "next";

export let metadata: Metadata = {
  title: "Trusmi | Products",
};
interface IProductPage {
  params: { slug: string };
}

export default function Product({ params }: IProductPage) {
  const product = PRODUCT_LIST.find((product) => product.slug === params.slug);

  metadata = {
    title: "Trusmi | Product",
  };

  return product ? (
    <>
      <div className="flex flex-col justify-center items-center">
        <HomeBackgroundEffectSpots count={4} />

        <ProductDetailsComponent
          product={product}
          className="mb-0 lg:mb-28 mt-16 z-10"
        />

        <GotAQuestion className="mb-16 z-10" />
      </div>
    </>
  ) : (
    <NotFound />
  );
}
