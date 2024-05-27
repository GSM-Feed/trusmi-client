import { getPlaceholderSVG, toBase64 } from "@/common/common.functions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdLanguage } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full bg-neutral text-sm z-20 px-5 lg:px-0">
      <div className="flex w-full flex-col py-2 max-w-[1200px]">
        {/* Footer Top Part */}
        <div className="flex w-full py-12 flex-wrap">
          <div className="basis-full lg:basis-1/4 mb-5 lg:mb-0 flex flex-col items-center justify-center lg:block">
            <div className="mb-5 text-center lg:text-left">
              <Link href="/" className="">
                <Image
                  src={"/images/logo/trusmi.svg"}
                  width={114}
                  height={31}
                  alt="Trusmi Logo"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    getPlaceholderSVG(114, 31)
                  )}`}
                />
              </Link>
            </div>
            <p className="text-[#A4ABB1] font-quicksand max-w-[80%] text-center lg:text-left">
              TMX is a state-of-the-art wearable that keeps you healthy, safe
              and connected.
            </p>
          </div>
          {/* Footer Links */}
          <div className="basis-full lg:basis-3/4 flex">
            {/* Link Group  */}
            <div className="basis-1/4">
              <p className="font-bold mb-4 text-center lg:text-left">About</p>
              <ul className="flex flex-col gap-3">
                <li className="font-quicksand font-normal text-xs font-medium text-center lg:text-left hover:text-primary">
                  <Link href="/">Company</Link>
                </li>
                <li className="font-quicksand font-normal text-xs font-medium text-center lg:text-left hover:text-primary">
                  <Link href="/about">About</Link>
                </li>
                <li className="font-quicksand font-normal text-xs font-medium text-center lg:text-left hover:text-primary">
                  <Link href="/products">Products</Link>
                </li>
                <li className="font-quicksand font-normal text-xs font-medium text-center lg:text-left hover:text-primary">
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Link Group  */}
            <div className="basis-1/4">
              <p className="font-bold mb-4 text-center lg:text-left">Product</p>
              <ul className="flex flex-col gap-3">
                <li className="font-quicksand font-normal text-xs font-medium text-center lg:text-left hover:text-primary">
                  <Link href="/">Trusmi Pro</Link>
                </li>
                <li className="font-quicksand font-normal text-xs font-medium text-center lg:text-left hover:text-primary">
                  <Link href="/">Trusmi Sport</Link>
                </li>
                <li className="font-quicksand font-normal text-xs font-medium text-center lg:text-left hover:text-primary">
                  <Link href="/">Trusmi Cool</Link>
                </li>
                <li className="font-quicksand font-normal text-xs font-medium text-center lg:text-left hover:text-primary">
                  <Link href="/">Trusmi Care</Link>
                </li>
              </ul>
            </div>

            {/* Link Group  */}
            <div className="basis-1/4">
              <p className="font-bold mb-4 text-center lg:text-left">
                Discover
              </p>
              <ul className="flex flex-col gap-3">
                <li className="font-quicksand font-normal text-xs font-medium text-center lg:text-left hover:text-primary">
                  <Link href="/">Store & Services</Link>
                </li>
                <li className="font-quicksand font-normal text-xs font-medium text-center lg:text-left hover:text-primary">
                  <Link href="/">Accessories</Link>
                </li>
                <li className="font-quicksand font-normal text-xs font-medium text-center lg:text-left hover:text-primary">
                  <Link href="/">Promotion</Link>
                </li>
              </ul>
            </div>

            {/* Link Group  */}
            <div className="basis-1/4">
              <p className="font-bold mb-4 text-center lg:text-left">
                Help Center
              </p>
              <ul className="flex flex-col gap-3">
                <li className="font-quicksand font-normal text-xs font-medium text-center lg:text-left hover:text-primary">
                  <Link href="/">Community</Link>
                </li>
                <li className="font-quicksand font-normal text-xs font-medium text-center lg:text-left hover:text-primary">
                  <Link href="/">Academy</Link>
                </li>
                <li className="font-quicksand font-normal text-xs font-medium text-center lg:text-left hover:text-primary">
                  <Link href="/">Support</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Part */}
        <div className="flex w-full py-6 border-t border-t-borderC text-xs flex-wrap flex-col-reverse lg:flex-row">
          <p className="basis-full lg:basis-1/4 text-center lg:text-left">
            © Copyright 2024 Trusmi.
          </p>
          <div className="basis-full lg:basis-3/4 flex mb-4 lg:mb-0">
            <div className="basis-1/4 text-center lg:text-left">
              <Link href="/">
                Terms <span className="hidden lg:inline">of Service</span>
              </Link>
            </div>
            <div className="basis-1/4 text-center lg:text-left">
              <Link href="/">Privacy</Link>
            </div>
            <div className="basis-1/4 text-center lg:text-left">
              <Link href="/">Cookies</Link>
            </div>
            <div className="basis-1/4 flex gap-1 justify-center lg:justify-start items-center">
              <MdLanguage /> <span>English</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
