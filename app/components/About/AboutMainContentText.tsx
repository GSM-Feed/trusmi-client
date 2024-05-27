import { ICommonComponentInterface } from "@/app/Interfaces/common.interface";
import React from "react";

interface IAboutMainContentText extends ICommonComponentInterface {}

const AboutMainContentText: React.FC<IAboutMainContentText> = ({ className }) => {
  return (
    <section
      className={`${className} home-main-content-text max-w-[1200px] w-full text-center flex flex-col items-center`}
    >
      <h1 className="text-primary text-3xl font-bold">Welcome to Trusmi,</h1>
      <h2 className="text-secondary text-2xl lg:text-3xl font-bold mb-3">
        where innovation meets affordability.
      </h2>
      <p className="content-text text-base max-w-[770px] w-full">
        Our brand is dedicated to providing user-centered, high-quality
        electronics at the most cost-effective prices. Explore our range of
        products designed to enhance your lifestyle, from mobile phone
        accessories to mini home appliances. With Trusmi, you can trust that
        you’re getting top-notch products without breaking the bank.
      </p>
    </section>
  );
};

export default AboutMainContentText;
