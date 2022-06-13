import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ProductDetail3 = ({ img, img2, name, desc, slug, cat }) => {
  return (
    <div className="bg-white outline outline-[2px] outline-black/10 overflow-hidden shadow-lg hover:shadow-xl py-[0px] px-[0px] flex flex-col w-[330px] h-[298px] justify-center items-center group relative m-[10px]">
      {/* Image */}
      <div className=" cursor-pointer px-[0px] transition-all duration-500 group-hover:scale-105 absolute top-[10%] group-hover:opacity-[0%]">
        <img src={img} alt="" objectfit="contain" height="200" width="200" />
      </div>
      <div className=" cursor-pointer px-[0px] transition-all duration-500 group-hover:scale-105 absolute top-[10%] z-[10] opacity-[0%] group-hover:opacity-[100%]">
        <img src={img2} alt="" objectfit="contain" height="200" width="200" />
      </div>
      {/* Title */}
      <div className="text-center absolute bottom-[35px] mt-[30px]">
        <p className="font-bold text-[18px] mb-[0px]">{name}</p>
        <p className="text-[14px] font-normal mb-[0px] text-center">{desc}</p>
      </div>
      {/* Link */}
      <div className="absolute text-[14px] bottom-[22px] px-[20px] py-[12px] w-full justify-center bg-white flex items-center translate-y-[100px] group-hover:translate-y-[0px] transition-all duration-500">
        <Link href={`/product/${slug}`}>
          <button className="outline xs:outline-[1px] md:outline-[2px] font-semibold text-royal rounded-[50px] px-[20px] py-[7px] mr-[10px] cursor-pointer">
            Details
          </button>
        </Link>
        <button
          href=""
          className="outline outline-[2px] bg-gradient-to-r from-[#030632] to-[#0e1468] text-white rounded-[50px] px-[10px] py-[7px] cursor-pointer"
        >
          Where to buy
        </button>
      </div>
    </div>
  );
};

export default ProductDetail3;
