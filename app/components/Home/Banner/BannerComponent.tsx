import { ICommonComponentInterface } from "@/app/Interfaces/common.interface";
import Image from "next/image";
import React from "react";
import BannerClientComponent from "./BannerClientComponent";
import BannerItem from "./BannerItem";
import { BANNER_ITEMS } from "./BannerItemsList";

const bannerItems = BANNER_ITEMS;

interface IBannerComponent extends ICommonComponentInterface {}

const BannerComponent: React.FC<IBannerComponent> = ({ className }) => {
  return (
    <section className={`${className} home-banner max-w-[1200px] w-full`}>
      <BannerClientComponent bannerItems={bannerItems}>
        <BannerItem {...bannerItems[0]} noAnimate />
      </BannerClientComponent>
    </section>
  );
};

export default BannerComponent;
