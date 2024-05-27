"use client";

import React from "react";
import { motion } from "framer-motion";

const BannerItemImageContent = ({ children, noAnimate }: any) => {
  return noAnimate ? (
    <div className="banner-image basis-1/2 flex flex-col-reverse lg:flex-row justify-between lg:pr-10 relative">
      <div className="flex justify-center items-center relative max-w-[450px] 2xl:max-w-[550px] w-full py-10">
        {children}
      </div>
    </div>
  ) : (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        // duration: 3000
      }}
      className="banner-image basis-1/2 flex flex-col-reverse lg:flex-row justify-between lg:pr-10 relative"
    >
      <div className="flex justify-center items-center relative max-w-[450px] 2xl:max-w-[550px] w-full py-10">
        {children}
      </div>
    </motion.div>
  );
};

export default BannerItemImageContent;
