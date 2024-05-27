import Image from "next/image";
import React from "react";
import BannerItemImageContent from "./BannerItemImageContent";
import BannerItemTextContent from "./BannerItemTextContent";

interface IBannerItem {
  imageContent: JSX.Element;
  textContent: JSX.Element;
  noAnimate?: boolean;
}

const BannerItem: React.FC<IBannerItem> = ({
  imageContent,
  textContent,
  noAnimate = false,
}) => {
  return (
    <>
      <BannerItemImageContent noAnimate={noAnimate}>
        {imageContent}
      </BannerItemImageContent>
      <BannerItemTextContent noAnimate={noAnimate}>
        {textContent}
      </BannerItemTextContent>
    </>
  );
};

export default BannerItem;
