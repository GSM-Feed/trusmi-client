"use client";

import { ICommonComponentInterface } from "@/app/Interfaces/common.interface";
import React, { useEffect, useState } from "react";
import QuoteIcon from "../../Icons/QuoteIcon";
import Image from "next/image";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { getPlaceholderSVG, toBase64 } from "@/common/common.functions";
import { motion, useAnimate } from "framer-motion";

const testimonials = [
  {
    name: "Walton Xavier",
    role: "UI Designer at Mamahe Studio",
    message:
      "If efficiency means something to you, then definitely check out Trusmi, who makes these chargers and cables that I really like.",
    image: "/images/testimonial/person-1.png",
  },
  {
    name: "Benjamin Franklin",
    role: "Managing Director at Abracadabra",
    message:
      "I am a very satisfied customer of Trusmi products. They are very reliable and durable. The never fail to impress me. Big ups to the Trusmi team.",
    image: "/images/testimonial/person-2.png",
  },
  {
    name: "Abraham John",
    role: "CEO at Bonanza",
    message:
      "I have been using Trusmi products for a while now and I must say that I am very impressed with the quality of their products.",

    image: "/images/testimonial/person-3.png",
  },
];

interface IHomeTestimonial extends ICommonComponentInterface {}

const HomeTestimonial: React.FC<IHomeTestimonial> = ({ className }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentTimeout, setCurrentTimeout] = useState<any>(null);
  const [firstTime, setFirstTime] = useState(true);

  const currentTestimonialImage = testimonials[currentTestimonial].image;
  const prevTestimonialImage =
    currentTestimonial === 0
      ? testimonials[testimonials.length - 1].image
      : testimonials[currentTestimonial - 1].image;
  const nextTestimonialImage =
    currentTestimonial === testimonials.length - 1
      ? testimonials[0].image
      : testimonials[currentTestimonial + 1].image;

  const next = () => {
    firstTime && setFirstTime(false);
    setCurrentTestimonial((curr) =>
      curr == testimonials.length - 1 ? 0 : curr + 1
    );
  };

  const prev = () => {
    firstTime && setFirstTime(false);
    setCurrentTestimonial((curr) =>
      curr == 0 ? testimonials.length - 1 : curr - 1
    );
  };

  useEffect(() => {
    clearTimeout(currentTimeout);
    const timeout: any = setTimeout(() => {
      next();
    }, 5000);
    setCurrentTimeout(timeout);
  }, [currentTestimonial]);

  return (
    <section className={`${className} max-w-[1200px] w-full relative`}>
      <div
        className="absolute left-0 text-xl text-borderCLight cursor-pointer"
        style={{ top: "50%", transform: "translateY(-50%)" }}
        onClick={prev}
      >
        <BiSolidLeftArrow />
      </div>
      <div
        className="absolute right-0 text-xl text-borderCLight cursor-pointer"
        style={{ top: "50%", transform: "translateY(-50%)" }}
        onClick={next}
      >
        <BiSolidRightArrow />
      </div>
      <div className="text-[#232323] flex items-center justify-center mb-3">
        <QuoteIcon width={35} height={30} />
      </div>
      <h2 className="text-center text-primary text-3xl font-bold mb-12">
        Our People Are Saying
      </h2>
      <div>
        <div className="flex flex-col items-center justify-center">
          <p className="content-text text-sm text-center max-w-[480px] mb-16">
            {testimonials?.map(
              (testimonial, index) =>
                index === currentTestimonial &&
                (firstTime ? (
                  <div className="content-text text-sm text-center max-w-[480px] mb-16" key={index + 1}>{testimonial.message}</div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0.5, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    }}
                    key={index + 1}
                  >
                    {testimonial.message}
                  </motion.div>
                ))
            )}
          </p>
          <div className="flex gap-24 justify-center items-center">
            <Image
              src={prevTestimonialImage}
              width={40}
              height={40}
              alt="Testimonial 1"
              className="rounded-full opacity-60"
              draggable={false}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                getPlaceholderSVG(40, 40)
              )}`}
            />
            <Image
              src={currentTestimonialImage}
              width={80}
              height={80}
              alt="Testimonial 1"
              className="rounded-full mb-4"
              draggable={false}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                getPlaceholderSVG(80, 80)
              )}`}
            />
            <Image
              src={nextTestimonialImage}
              width={40}
              height={40}
              alt="Testimonial 1"
              className="rounded-full opacity-60"
              draggable={false}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                getPlaceholderSVG(40, 40)
              )}`}
            />
          </div>
          {testimonials?.map(
            (testimonial, index) =>
              index === currentTestimonial &&
              (firstTime ? (
                <div className="text-center" key={index}>
                  <p className="text-secondary text-base font-medium">
                    {testimonial.name}
                  </p>
                  <p className="content-text text-xs">{testimonial.role}</p>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0.5, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                  className="text-center"
                  key={index}
                >
                  <p className="text-secondary text-base font-medium">
                    {testimonial.name}
                  </p>
                  <p className="content-text text-xs">{testimonial.role}</p>
                </motion.div>
              ))
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonial;
