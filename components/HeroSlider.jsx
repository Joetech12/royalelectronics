import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
// import styles from "../styles/slider.module.css";

const featuredProducts = [
  "/images/A.png",
  "/images/B.png",
  "/images/C.png",
  "/images/D.png",
  "/images/E.png",
  "/images/F.png",
];

let count = 0;
let slideInterval;

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();

    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div>

      <div
        ref={slideRef}
        className="w-full select-none relative xs:mt-[60px] md:mt-[108px]"
      >
        <div className="max-w-[1240px] mx-auto flex justify-center relative xs:px-[0px] md:px-[20px]">
          <div className="absolute w-full top-1/2 z-[60] transform -translate-y-1/2 xs:px-[5px] md:px-[30px] flex justify-between items-center">
            <button
              className="bg-royal text-white xs:text-[20px] md:text-[30px] xs:p-[5px] md:p-[10px] rounded-full bg-opacity-90 cursor-pointer hover:bg-opacity-100 transition"
              onClick={handleOnPrevClick}
            >
              <BsChevronLeft />
            </button>
            <button
              className="bg-royal text-white xs:text-[20px] md:text-[30px] xs:p-[5px] md:p-[10px] rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
              onClick={handleOnNextClick}
            >
              <BsChevronRight />
            </button>
          </div>
          <img src={featuredProducts[currentIndex]} alt="" objectfit="cover" />
        </div>
      </div>
    </div>
  );
}
