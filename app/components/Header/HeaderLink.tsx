"use client";

import { usePathname } from "next/navigation";
import React from "react";

const HeaderLink = ({ children, link }: any) => {
  const pathName = usePathname();
  return (
    <span
      className={`text-textC hover:text-primary ${
        link == pathName ? "!text-primary font-medium" : ""
      }`}
    >
      {children}
    </span>
  );
};

export default HeaderLink;
