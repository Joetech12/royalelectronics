import React from "react";
import Link from "next/link";
import { products } from "../productsAPI";
import ProductDetail1 from "./ProductDetail1";
import {
  MdChevronLeft,
  MdChevronRight,
  MdInsertEmoticon,
} from "react-icons/md";

const BestSellersSection = ({ rowID }) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="w-full">
      <div className="bg-white">
        <div className="max-w-[1240px] mx-auto px-[20px] xs:py-[0px] md:py-[100px] divide-y-[3px]">
          {/* heading */}
          <div className="flex flex-col items-center">
            <div className="text-black text-[24px] font-bold flex space-x-[0px] h-full pt-[0px]">
              <div className="border-b-[5px] font-bold border-[#464A8A] h-full py-[20px] duration-300 group">
                <div className="flex items-center px-[20px] ">
                  <p className="">BEST SELLERS</p>
                </div>
              </div>
            </div>
          </div>

          {/* product */}
          <div className="relative flex items-center pt-[80px]">
            <MdChevronLeft
              onClick={slideLeft}
              className="bg-royal3 text-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 "
              size={40}
            />
            <div
              id={"slider" + rowID}
              className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
            >
              {products.slice(0,10).map((item) => (
                <div
                  key={item.id}
                  className="inline-block"
                >
                      <ProductDetail1 img={item.img} img2={item.img2} name={item.title} desc={item.desc} />
                </div>
              ))}
            </div>
            <MdChevronRight
              onClick={slideRight}
              className="bg-royal3 text-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10"
              size={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellersSection;
