import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";
import HeaderLink from "./HeaderLink";
import { getPlaceholderSVG, toBase64 } from "@/common/common.functions";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="flex items-center justify-center w-full border-b border-b-[#EDF1F4] z-20 px-5 lg:px-0">
      <div className="flex justify-between w-full items-center py-2 max-w-[1200px]">
        <div>
          <Link href="/">
            <Image
              src={"/images/logo/trusmi.svg"}
              width={114}
              height={31}
              alt="Trusmi Logo"
              // placeholder="blur"
              // blurDataURL={`data:image/svg+xml;base64,${toBase64(
              //   getPlaceholderSVG(114, 31)
              // )}`}
            />
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="menu menu-horizontal rounded-box">
            <li>
              <HeaderLink link="/about">
                <Link href="/about">About</Link>
              </HeaderLink>
            </li>
            <li>
              <HeaderLink link="/products">
                <Link href="/products">Products</Link>
              </HeaderLink>
            </li>
            <li>
              <HeaderLink link="/contact">
                <Link href="/contact">Contact Us</Link>
              </HeaderLink>
            </li>
          </ul>
        </div>
        <MobileMenu />
        {/* <div c></div> */}
        <div className="hidden lg:flex gap-1 align-middle items-center px-3 border-x border-t-borderC">
          <GrSearch />
          <input
            type="text"
            placeholder="Search..."
            className="input input-ghost w-full max-w-[5rem] input-sm border-0 shadow-none p-0 outline-none transition-transform timing-300 focus:border-0 focus:outline-none"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
