import React from "react";
import Link from "next/link";
import { BiCommentDots } from "react-icons/bi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { blogs } from "../blogsAPI";

import Blog from "./Blog";

const BlogSection = () => {
  return (
    <div className="w-full">
      <div className="bg-[#f1f1f1]">
        <div className="max-w-[1240px] mx-auto px-[20px] xs:py-[50px] md:py-[100px] divide-y-[4px]">
          {/* heading */}
          <div className="flex flex-col items-center divide-y-[4px]">
            <div className="text-black text-[24px] font-bold flex space-x-[0px] h-full pt-[20px]">
              <div className="border-b-[5px] font-bold border-[#464A8A] h-full py-[20px] duration-300 group">
                <Link href="/blog">
                  <div className="flex items-center px-[20px] cursor-pointer">
                    <p className="">OUR BLOG</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* blogs */}
          <div className="flex xs:flex-col xs:items-center md:flex-row pt-[50px] ">
            {blogs.slice(0, 3).map((bg) => (
              <Blog
                key={bg.id}
                img={bg.img}
                title={bg.title}
                date={bg.date}
                text={bg.text}
                lref={bg.lref}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
