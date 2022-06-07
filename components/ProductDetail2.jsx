import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

const ProductDetail2 = ({ img, name, desc }) => {
  return (
    <div className="bg-white outline outline-[2px] outline-black/10 overflow-hidden shadow-xl hover:shadow-2xl py-[30px] px-[20px] flex flex-col w-[386px] h-[482px] justify-center items-center group relative m-[20px] relative">
      {/* Image */}
      <div className=" cursor-pointer mb-[20px] px-[10px] transition-all duration-500 group-hover:scale-105 absolute top-[10%]">
        <img src={img} alt="" objectFit="contain" height="300" width="300" />
      </div>
      {/* Title */}
      <div className="text-center absolute bottom-[35px]">
        <p className="font-bold text-[23px] mb-[0px]">
          {name}
        </p>
        <p className="text-[16px] mb-[0px] text-center line-clamp-2 px-[10px]">
          {desc}
        </p>
      </div>
      {/* Link */}
      <div className="absolute text-[14px] bottom-[22px] px-[20px] py-[10px] w-full justify-center bg-white flex items-center translate-y-[100px] group-hover:translate-y-[0px] transition-all duration-500">
        
        <button
          href=""
          className="outline outline-[2px] font-semibold text-royal rounded-[50px] px-[40px] py-[10px] mr-[20px] cursor-pointer"
        >
          Details
        </button>
        <button
          href=""
          className="bg-gradient-to-r from-[#464A8A] to-royal text-white rounded-[50px] px-[20px] py-[10px] cursor-pointer"
        >
          Where to buy
        </button>
      </div>
    </div>
  );
};

export default ProductDetail2;
