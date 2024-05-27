"use client";

import React from "react";
import { motion } from "framer-motion";

const BannerItemTextContent = ({ children, noAnimate }: any) => {
  return noAnimate ? (
    <div className="banner-content basis-1/2 flex flex-col items-center lg:items-start justify-center lg:pl-8 mt-10 lg:mt-0">
      {children}
    </div>
  ) : (
    <motion.div
      initial={{ opacity: 0.5, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className="banner-content basis-1/2 flex flex-col items-center lg:items-start justify-center lg:pl-8 mt-10 lg:mt-0"
    >
      {children}
    </motion.div>
  );
};

export default BannerItemTextContent;
