"use client";

import React, { useEffect, useState } from "react";
import BannerItem from "./BannerItem";

import { motion } from "framer-motion";

const BannerClientComponent = ({ children, bannerItems }: any) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [currentTimeout, setCurrentTimeout] = useState<any>(null);

  useEffect(() => {
    clearTimeout(currentTimeout);
    let timeout: any = null;
    if (selected == null) {
      timeout = setTimeout(() => {
        setSelected(1);
      }, 5000);
    } else {
      timeout = setTimeout(() => {
        if (selected == bannerItems.length - 1) {
          setSelected(0);
        } else {
          setSelected(selected + 1);
        }
      }, 5000);
    }
    setCurrentTimeout(timeout);
  }, [selected]);

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center">
      <div className="flex lg:flex-col items-center justify-center gap-3 lg:absolute h-full">
        {bannerItems?.map((item: any, index: number) => (
          <div
            key={item.id}
            className={`w-[20px] h-[20px] rounded-full flex items-center justify-center cursor-pointer z-50 ${
              selected == null
                ? index == 0
                  ? "outline outline-primary"
                  : ""
                : selected == index
                ? "outline outline-primary"
                : ""
            }`}
            onClick={() => setSelected(index)}
          >
            <div
              className={`w-[15px] h-[15px] rounded-full  ${
                selected == null
                  ? index == 0
                    ? "bg-secondary"
                    : "bg-[#B4B4B4]"
                  : selected == index
                  ? "bg-secondary"
                  : "bg-[#B4B4B4]"
              }`}
            ></div>
          </div>
        ))}
      </div>
      {selected == null ? children : ""}
      {selected != null &&
        bannerItems?.map((item: any, index: number) => (
          <>{index == selected && <BannerItem key={item.id} {...item} />}</>
        ))}
    </div>
  );
};

export default BannerClientComponent;
