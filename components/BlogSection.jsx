import React from "react";
import { BiCommentDots } from "react-icons/bi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const BlogSection = () => {
  return (
    <div className="w-full">
      <div className="bg-[#f1f1f1]">
        <div className="max-w-[1240px] mx-auto px-[20px] xs:py-[50px] md:py-[100px]">
          {/* heading */}
          <div className="flex flex-col items-center divide-y-[4px]">
            <div className="text-black text-[24px] font-bold flex space-x-[0px] h-full pt-[20px]">
              <div className="border-b-[5px] font-bold border-[#464A8A] h-full py-[20px] duration-300 group">
                <div className="flex items-center px-[20px] cursor-pointer">
                  <p className="">OUR BLOG</p>
                </div>
              </div>
            </div>
          </div>

          {/* blogs */}
          <div className="flex xs:flex-col xs:items-center md:flex-row mt-[50px]">
            <div className="bg-white w-full shadow-lg hover:shadow-xl transition-all duration-500 pb-[30px] flex flex-col justify-center items-center m-[10px] max-h-[500px]">
              {/* Image */}
              <div className="mb-[20px] cursor-pointer">
                <img src="/blog1.jpg" alt="" />
              </div>
              <div className="flex flex-col justify-start px-[20px]">
                {/* Title */}
                <p className="cursor-pointer font-bold text-[24px] mb-[10px]">
                  6 Interesting Things About Your HD TV{" "}
                </p>
                {/* Link */}
                <div className="flex items-center  group hover:underline hover:text-royal underline-offset-[5px] mb-[20px]">
                  <p className="mr-[10px] text-black/50 ">6th June 2022</p>
                  <div className="text-[20px] text-royal text-black/50">
                    <BiCommentDots />
                  </div>
                </div>
                <p className="mr-[10px] line-clamp-3 mb-[20px]">
                  Fridges are present in our homes to make our lives easier.
                  There are usually two scenarios that cause use to want a new
                  fridge. Your current appliance is near or at its end of life
                  and needs replacement. You are ready to give your kitchen a
                  new look, with a beautiful, more sophisticated fridge, with
                  all the latest technologies.
                </p>
                <div className="flex items-center  group hover:underline hover:text-royal underline-offset-[5px]">
                  <p href="" className="cursor-pointer">
                    READ MORE
                  </p>
                  <div className="text-[25px] text-royal cursor-pointer">
                    <MdOutlineKeyboardArrowRight />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white w-full shadow-lg hover:shadow-xl transition-all duration-500 pb-[30px]  flex flex-col justify-center items-center m-[10px] max-h-[500px]">
              {/* Image */}
              <div className="mb-[20px] cursor-pointer">
                <img src="/blog2.jpg" alt="" />
              </div>
              <div className="flex flex-col justify-start px-[20px]">
                {/* Title */}
                <p className="cursor-pointer font-bold text-[24px] mb-[10px]">
                  Healthy Meals To Make In Your Microwave{" "}
                </p>
                {/* Link */}
                <div className="flex items-center  group hover:underline hover:text-royal underline-offset-[5px] mb-[20px]">
                  <p className="mr-[10px] text-black/50 ">31st May 2022</p>
                  <div className="text-[20px] text-royal text-black/50">
                    <BiCommentDots />
                  </div>
                </div>
                <p className="mr-[10px] line-clamp-3 mb-[20px]">
                  Fridges are present in our homes to make our lives easier.
                  There are usually two scenarios that cause use to want a new
                  fridge. Your current appliance is near or at its end of life
                  and needs replacement. You are ready to give your kitchen a
                  new look, with a beautiful, more sophisticated fridge, with
                  all the latest technologies.
                </p>
                <div className="flex items-center  group hover:underline hover:text-royal underline-offset-[5px]">
                  <p href="" className="cursor-pointer">
                    READ MORE
                  </p>
                  <div className="text-[25px] text-royal cursor-pointer">
                    <MdOutlineKeyboardArrowRight />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white w-full shadow-lg hover:shadow-xl transition-all duration-500 pb-[30px]  flex flex-col justify-center items-center m-[10px] max-h-[500px]">
              {/* Image */}
              <div className="mb-[20px] cursor-pointer">
                <img src="/blog3.jpg" alt="" />
              </div>
              <div className="flex flex-col justify-start px-[20px]">
                {/* Title */}
                <p className="cursor-pointer font-bold text-[24px] mb-[10px]">
                  How To Motivate Yourself To Do Your Laundry{" "}
                </p>
                {/* Link */}
                <div className="flex items-center  group hover:underline hover:text-royal underline-offset-[5px] mb-[20px]">
                  <p className="mr-[10px] text-black/50 ">25th May 2022</p>
                  <div className="text-[20px] text-royal text-black/50">
                    <BiCommentDots />
                  </div>
                </div>
                <p className="mr-[10px] line-clamp-3 mb-[20px]">
                  Fridges are present in our homes to make our lives easier.
                  There are usually two scenarios that cause use to want a new
                  fridge. Your current appliance is near or at its end of life
                  and needs replacement. You are ready to give your kitchen a
                  new look, with a beautiful, more sophisticated fridge, with
                  all the latest technologies.
                </p>
                <div className="flex items-center  group hover:underline hover:text-royal underline-offset-[5px]">
                  <p href="" className="cursor-pointer">
                    READ MORE
                  </p>
                  <div className="text-[25px] text-royal cursor-pointer">
                    <MdOutlineKeyboardArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
