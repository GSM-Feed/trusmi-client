import { ICommonComponentInterface } from "@/app/Interfaces/common.interface";
import Link from "next/link";
import React from "react";

interface IGotAQuestion extends ICommonComponentInterface {}

const GotAQuestion: React.FC<IGotAQuestion> = ({ className }) => {
  return (
    <section
      className={`${className} max-w-[1200px] w-full bg-primary flex rounded-xl p-16 py-24 relative flex-wrap`}
    >
      <div className="absolute -top-24 left-32">
        <img src="/images/aboutBanner/check.svg" alt="Check" />
      </div>
      <div className="basis-full lg:basis-2/3 flex flex-col justify-center">
        <h2 className="text-white text-4xl lg:text-5xl font-bold">
          Got a question or <br /> need assistance?
        </h2>
        <p className="text-white text-sm">
          we’re committed to providing prompt and helpful support.
        </p>
      </div>
      <div className="basis-full lg:basis-1/3 flex items-center justify-center mt-10 lg:mt-0">
        <Link
          href={"/contact"}
          className="btn bg-white text-primary btn-lg h-14 min-h-14 rounded-full hover:border hover:border-white hover:text-white min-w-48"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
};

export default GotAQuestion;
