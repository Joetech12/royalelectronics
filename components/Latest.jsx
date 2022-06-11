import React, { useState, useEffect } from "react";
import ProductDetail2 from "./ProductDetail2";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const Latest = ({ hidden, dropnav }) => {
  const [index, setIndex] = useState(0);

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className="bg-white transition-all duration-500">
      <div className="max-w-[1240px] mx-auto px-[20px] xs:py-[50px] md:py-[100px]">
        <div className="relative flex items-center overflow-hidden">
          {/* Left Arrow */}
          <button
            className="absolute z-[10] left-0 
             bg-royal text-white xs:text-[20px] md:text-[30px] xs:p-[5px] md:p-[10px] rounded-full bg-opacity-90 cursor-pointer hover:bg-opacity-100 transition"
            onClick={() => handleArrow("l")}
          >
            <BsChevronLeft />
          </button>

          <div
            style={{ transform: `translateX(${-25 * index}vw)` }}
            className="flex xs:flex-col xs:items-center md:flex-row relative transition-all duration-1000 ease-in-out"
          >
            <ProductDetail2
              img="/4.png"
              name="Steel 5c Gas Cooker"
              desc="Free standing Electric Oven, Big Capacity, True convection,
        ®EasyClean-LRE3163ST Big Capacity, True convection, ®EasyClean-LRE3163ST"
            />
            <ProductDetail2
              img="/6.png"
              name="Royal Digital Microwave"
              desc="Free standing Electric Oven, Big Capacity, True convection,
        ®EasyClean-LRE3163ST Big Capacity, True convection, ®EasyClean-LRE3163ST"
            />
            <ProductDetail2
              img="/3.png"
              name="TwinT Washing Machine"
              desc="Free standing Electric Oven, Big Capacity, True convection,
        ®EasyClean-LRE3163ST Big Capacity, True convection, ®EasyClean-LRE3163ST"
            />
            <ProductDetail2
              img="/3.png"
              name="TwinT Washing Machine"
              desc="Free standing Electric Oven, Big Capacity, True convection,
        ®EasyClean-LRE3163ST Big Capacity, True convection, ®EasyClean-LRE3163ST"
            />
            <ProductDetail2
              img="/8.png"
              name="Boom Boss RXL"
              desc="Free standing Electric Oven, Big Capacity, True convection,
                    ®EasyClean-LRE3163ST Big Capacity, True convection, ®EasyClean-LRE3163ST"
            />
            <ProductDetail2
              img="/8.png"
              name="Boom Boss RXL"
              desc="Free standing Electric Oven, Big Capacity, True convection,
                    ®EasyClean-LRE3163ST Big Capacity, True convection, ®EasyClean-LRE3163ST"
            />
            <ProductDetail2
              img="/8.png"
              name="Boom Boss RXL"
              desc="Free standing Electric Oven, Big Capacity, True convection,
                    ®EasyClean-LRE3163ST Big Capacity, True convection, ®EasyClean-LRE3163ST"
            />
            <ProductDetail2
              img="/8.png"
              name="Boom Boss RXL"
              desc="Free standing Electric Oven, Big Capacity, True convection,
                    ®EasyClean-LRE3163ST Big Capacity, True convection, ®EasyClean-LRE3163ST"
            />
          </div>

          {/* Right Arrow */}
          <button
            className="absolute z-[10] 
             right-0 bg-royal text-white xs:text-[20px] md:text-[30px] xs:p-[5px] md:p-[10px] rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={() => handleArrow("r")}
          >
            <BsChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Latest;
