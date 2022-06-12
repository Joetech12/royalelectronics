import React from "react";
import Image from "next/image";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ProductDetail1 = ({ img, name, desc }) => {
  return (
    <div className="bg-white outline outline-[2px] outline-black/10 overflow-hidden shadow-xl hover:shadow-2xl py-[30px] px-[20px] flex flex-col w-[250px] h-[360px] justify-center items-center group relative m-[5px] ">
      {/* Image */}
      <div className=" cursor-pointer px-[10px] transition-all duration-500 group-hover:scale-105 absolute top-[10%]">
        <img src={img} alt="" objectfit="contain" height="250" width="250" />
      </div>
      {/* Title */}
      <div className="text-center absolute bottom-[35px] mt-[30px]">
        <p className="font-bold text-[18px] mb-[0px]">{name}</p>
        <p className="text-[14px] font-normal mb-[0px] text-center">{desc}</p>
      </div>
      {/* Link */}
      <div className="absolute text-[14px] bottom-[22px] px-[20px] py-[12px] w-full justify-center bg-white flex items-center translate-y-[100px] group-hover:translate-y-[0px] transition-all duration-500">
        <button
          href=""
          className="outline xs:outline-[1px] md:outline-[2px] font-semibold text-royal rounded-[50px] px-[10px] py-[7px] mr-[10px] cursor-pointer"
        >
          Details
        </button>
        <button
          href=""
          className="outline outline-[2px] bg-gradient-to-r from-[#464A8A] to-royal text-white rounded-[50px] px-[10px] py-[7px] cursor-pointer"
        >
          Where to buy
        </button>
      </div>
    </div>
  );
};

export default ProductDetail1;
