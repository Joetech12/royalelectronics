import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ServiceFeaturesSection = () => {
  return (
    <div className="w-full">
      <div className="bg-[#f1f1f1]">
        <div className="max-w-[1240px] mx-auto px-[20px] xs:py-[50px] md:py-[100px]">

        {/* service feature */}

          <div className="flex xs:flex-col xs:items-center md:flex-row ">

              <div className="bg-white w-full shadow-lg hover:shadow-xl transition-all duration-500 py-[30px] px-[20px] flex flex-col justify-center items-center">
                  {/* Image */}
                <div className="mb-[20px]">
                  <img src="/savings.jpeg" alt="" />
                </div>
                <div className="flex flex-col justify-start">
                    {/* Title */}
                    <p className="font-bold xs:text-[18px] md:text-[24px] mb-[5px]">Royal Inverter Technology</p>
                    {/* Link */}
                    <div className="flex items-center  group hover:underline hover:text-royal underline-offset-[5px]">
                        <p href="" className="cursor-pointer xs:text-[14px] md:text-[18px]">
                          Learn More
                        </p>
                        <div className="text-[22px] text-royal cursor-pointer">
                          <MdOutlineKeyboardArrowRight />
                        </div>
                    </div>
                </div>
              </div>

              <div className="bg-white mx-[20px] my-[20px] w-full shadow-lg hover:shadow-xl transition-all duration-500 py-[30px] px-[20px] flex flex-col justify-center items-center">
                  {/* Image */}
                <div className="mb-[20px]">
                  <img src="/4k.jpg" alt="" />
                </div>
                <div className="flex flex-col justify-start">
                    {/* Title */}
                    <p className="font-bold xs:text-[18px] md:text-[24px] mb-[5px]">4K Resolutions Screen</p>
                    {/* Link */}
                    <div className="flex items-center  group hover:underline hover:text-royal underline-offset-[5px]">
                        <p href="" className="cursor-pointer xs:text-[14px] md:text-[18px]">
                        Learn More
                        </p>
                        <div className="text-[22px] text-royal cursor-pointer">
                          <MdOutlineKeyboardArrowRight />
                        </div>
                    </div>
                </div>
              </div>

              <div className="bg-white  w-full shadow-lg hover:shadow-xl transition-all duration-500 py-[30px] px-[20px] flex flex-col justify-center items-center">
                  {/* Image */}
                <div className="mb-[20px]">
                  <img src="/warranty.jpg" alt="" />
                </div>
                <div className="flex flex-col justify-start">
                    {/* Title */}
                    <p className="font-bold xs:text-[18px] md:text-[24px] mb-[5px]">Royal warranty policy</p>
                    {/* Link */}
                    <div className="flex items-center  group hover:underline hover:text-royal underline-offset-[5px]">
                        <p href="" className="cursor-pointer xs:text-[14px] md:text-[18px]">
                        Learn More
                        </p>
                        <div className="text-[22px] text-royal cursor-pointer">
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

export default ServiceFeaturesSection;
