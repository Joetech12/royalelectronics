import React from "react";
import { BiCommentDots } from "react-icons/bi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { graphCMSImageLoader } from "../util";

const Blog = ({ img, title, date, text, slug }) => {
  return (
    <div className="bg-white xs:w-[320px] md:w-[375px] shadow-lg hover:shadow-xl transition-all duration-500 hover:translate-y-[9px] pb-[0px] flex flex-col justify-center items-center xs:m-[20px] md:mx-[10px] relative">
      {/* Image */}
      <div className="mb-[10px] px-[-20px] ">
        <Image
          unoptimized
          loader={graphCMSImageLoader}
          src={img}
          alt=""
          width="500"
          height="300"
        />
      </div>
      <div className="flex flex-col justify-start px-[20px]">
        {/* Title */}
        <p className=" font-bold text-[24px] mb-[10px] line-clamp-1">
          {title}{" "}
        </p>
        {/* Link */}
        <div className="flex items-center group mb-[20px]">
          <div className="text-[20px] text-royal text-black/50">
            <MdDateRange />
          </div>
          <p className="ml-[10px] text-black/50 ">{date}</p>
        </div>
        <p className="mr-[10px] line-clamp-3 mb-[20px]">{text}</p>
        <Link href={`/blog/${slug}`}>
          <div className="flex items-center text-royal3 group hover:underline hover:text-royal underline-offset-[5px] mb-[20px]">
            <p href="" className="cursor-pointer ">
              Read More
            </p>
            <div className="text-[25px] text-royal cursor-pointer">
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
