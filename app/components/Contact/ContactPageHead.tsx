import { ICommonComponentInterface } from "@/app/Interfaces/common.interface";
import { getPlaceholderSVG, toBase64 } from "@/common/common.functions";
import Image from "next/image";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiMapPin2Fill } from "react-icons/ri";

interface IContactPageHead extends ICommonComponentInterface {}

const ContactPageHead: React.FC<IContactPageHead> = ({ className }) => {
  return (
    <section className={`${className} max-w-[2200px] w-full flex justify-center relative`}>
      <div className="absolute w-[100dvw] lg:w-full h-auto">
        <img alt="" src="/images/about/bg.svg" className="w-[100dvw] lg:w-full h-[220px] max-h-[500px] xl:object-bottom object-cover sm:h-auto" />
      </div>
      <div className="left-0 top-0 flex items-center justify-center flex-col pt-14 sm:pt-20 z-30 relative max-w-[1200px]">
        <h1 className="text-2xl sm:text-4xl font-bold text-white mb-2">Contact Us</h1>
        <p className="text-center font-quicksand text-white sm:text-lg">
          Whatever you need, we’re here to help. <br /> Just get in touch, and
          we’ll try our best to respond within 24 hours.
        </p>

        <Image
          width={1140}
          height={400}
          className="w-[90%] sm:w-full h-[300px] object-cover sm:h-auto"
          alt=""
          src="/images/about/map.png"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            getPlaceholderSVG(1140, 400)
          )}`}
        />

        <div className="sm:bg-primary flex flex-col gap-5 sm:gap-0 sm:flex-row w-full max-w-[900px] text-white text-center rounded-2xl sm:py-10  sm:-mt-36">
          <div className="basis-1/3 flex items-center justify-center flex-col gap-3 bg-primary sm:bg-transparent p-10 sm:p-0 rounded-2xl">
            <div className="text-3xl">
              <RiMapPin2Fill />
            </div>
            <p className="text-sm">
              455 West Orchard Street <br /> Kings Mountain, NC 28086
            </p>
          </div>
          <div className="basis-1/3 flex items-center justify-center flex-col gap-3 bg-primary sm:bg-transparent p-10 sm:p-0 rounded-2xl">
            <div className="text-3xl">
              <FaPhoneAlt />
            </div>
            <p className="text-sm">
              (272) 211-7370 <br /> (524) 386-5730
            </p>
          </div>
          <div className="basis-1/3 flex items-center justify-center flex-col gap-3 bg-primary sm:bg-transparent p-10 sm:p-0 rounded-2xl">
            <div className="text-3xl">
              <HiOutlineMail />
            </div>
            <p className="text-sm">
              support@trusmi.com <br /> info@trusmi.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageHead;
