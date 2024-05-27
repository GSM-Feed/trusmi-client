"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const MobileMenu = () => {
  const pathName = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        className="lg:hidden text-3xl text-secondary"
        onClick={() => {
          setShowMenu(true);
        }}
      >
        <GiHamburgerMenu />
      </div>
      <div
        className={`lg:hidden fixed w-[100dvw] h-[100dvh] z-50 top-0 left-0 transition-all ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-white/90 backdrop-blur-sm h-full w-full flex flex-col items-center justify-center relative">
          <div
            className="absolute top-5 right-5 text-4xl"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <MdClose />
          </div>
          <ul className="menu menu-vertical gap-5 text-secondary">
            <li className={`${pathName == "/about" ? "text-primary" : ""}`}>
              <Link
                href="/about"
                className="text-5xl font-medium"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                About
              </Link>
            </li>
            <li className={`${pathName == "/products" ? "text-primary" : ""}`}>
              <Link
                href="/products"
                className="text-5xl font-medium"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                Products
              </Link>
            </li>
            <li className={`${pathName == "/contact" ? "text-primary" : ""}`}>
              <Link
                href="/contact"
                className="text-5xl font-medium"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
