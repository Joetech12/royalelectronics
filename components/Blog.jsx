import React from "react";
import { BiCommentDots } from "react-icons/bi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";


const Blog = ({ img, title, date, text }) => {
  return (
    <div className="bg-white w-full shadow-lg hover:shadow-xl transition-all duration-500 hover:translate-y-5 pb-[30px] flex flex-col justify-center items-center m-[20px]">
      {/* Image */}
      <div className="mb-[10px] cursor-pointer px-[-20px]">
        <Image src={img} alt="" width="500" height="300" />
      </div>
      <div className="flex flex-col justify-start px-[20px]">
        {/* Title */}
        <p className="cursor-pointer font-bold text-[24px] mb-[10px]">
          {title}{" "}
        </p>
        {/* Link */}
        <div className="flex items-center group mb-[20px]">
          <p className="mr-[10px] text-black/50 ">{date}</p>
          <div className="text-[20px] text-royal text-black/50">
            <BiCommentDots />
          </div>
        </div>
        <p className="mr-[10px] line-clamp-3 mb-[20px]">{text}</p>
        <div className="flex items-center  group hover:underline hover:text-royal underline-offset-[5px] mb-[20px]">
          <p href="" className="cursor-pointer ">
            Read More
          </p>
          <div className="text-[25px] text-royal cursor-pointer">
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
