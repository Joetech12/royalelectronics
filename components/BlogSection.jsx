import React from "react";
import { BiCommentDots } from "react-icons/bi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
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
                <div className="flex items-center px-[20px] cursor-pointer">
                  <p className="">OUR BLOG</p>
                </div>
              </div>
            </div>
          </div>

          {/* blogs */}
          <div className="flex xs:flex-col xs:items-center md:flex-row pt-[50px]">
            <Blog
              img="/blog1.jpg"
              title="6 Interesting Things About Your HD TV"
              date="6th June 2022"
              text="Fridges are present in our homes to make our lives easier.
            There are usually two scenarios that cause use to want a new
            fridge. Your current appliance is near or at its end of life
            and needs replacement. You are ready to give your kitchen a
            new look, with a beautiful, more sophisticated fridge, with
            all the latest technologies."
            />

            <Blog
              img="/blog2.jpg"
              title="Healthy Meals To Make In Your Microwave"
              date="31st May 2022"
              text="Your current appliance is near or at its end of life
              and needs replacement. Fridges are present in our homes to make our lives easier. There are usually two scenarios that cause use to want a new fridge.  You are ready to give your kitchen a new look, with a beautiful, more sophisticated fridge, with all the latest technologies."
            />

            <Blog
              img="/blog3.jpg"
              title="How To Motivate Yourself To Do Your Laundry"
              date="25th May 2022"
              text="You are ready to give your kitchen a
              new look, with a beautiful, more sophisticated fridge, with
              all the latest technologies. Fridges are present in our homes to make our lives easier. There are usually two scenarios that cause use to want a new fridge. Your current appliance is near or at its end of life and needs replacement."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
