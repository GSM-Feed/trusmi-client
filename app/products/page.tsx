import { Metadata } from "next";
import GotAQuestion from "../components/Home/GotAQuestion";
import HomeBackgroundEffectSpots from "../components/Home/HomeBackgroundEffectSpots";
import ProductCategorySelector from "../components/Home/ProductCategorySelector";
import ProductListComponent from "../components/Products/ProductListComponent";
import ProductsMainContentText from "../components/Products/ProductsMainContentText";

export const metadata: Metadata = {
  title: "Trusmi | Products",
  description:
    "Discover our diverse range of products tailored to meet your needs. Whether you’re looking for sleek mobile phone accessories, convenient auto accessories, or innovative beauty care products, Trusmi has you covered. Explore each category to find the perfect blend of style, functionality, and affordability.",
};

interface IProductsPage {
  searchParams: { [key: string]: any };
}

export default function Products({ searchParams }: IProductsPage) {
  const category = searchParams?.category || null;
  const page = searchParams?.page || 1;
  const pagination = 9;

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <HomeBackgroundEffectSpots count={3} />
        <ProductsMainContentText className="mb-20 mt-16 z-10" />
        <ProductCategorySelector className="mb-28 z-10" forList />
        <ProductListComponent
          className="mb-28 z-10"
          category={category}
          page={page}
          pagination={pagination}
        />
        <GotAQuestion className="mb-16 z-10" />
      </div>
    </>
  );
}
