import React from "react";
import Image from "next/image";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ProductDetail1 = () => {
  return (
    <div className="bg-white outline outline-[2px] outline-black/10 overflow-hidden shadow-xl hover:shadow-2xl py-[30px] px-[20px] flex flex-col w-[386px] h-[482px] justify-center items-center group relative m-[20px]">
      {/* Image */}
      <div className="cursor-pointer mb-[30px] px-[10px] transition-all duration-500 group-hover:scale-105 ">
        <Image src="/5.png" alt="" objectFit="contain" height="300" width="300" />
      </div>
      {/* Title */}
      <p className="font-bold text-[24px] mb-[0px]">
        GenPAL Inverter Technology
      </p>
      <p className="text-[16px] mb-[0px] text-center line-clamp-2 px-[10px]">
        Free standing Electric Oven, Big Capacity, True convection,
        ®EasyClean-LRE3163ST Big Capacity, True convection, ®EasyClean-LRE3163ST
      </p>
      {/* Link */}
      <div className="absolute bottom-[22px] px-[20px] py-[2px] w-full justify-center bg-white flex items-center translate-y-[100px] group-hover:translate-y-[0px] transition-all duration-500">
        <button
          href=""
          className="outline flex justify-center outline-[1px] w-[125px] h-[46px] rounded-[50px] cursor-pointer mr-[20px] px-[40px] py-[10px]"
        >
          Detail
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

export default ProductDetail1;
