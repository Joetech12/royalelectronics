import React from "react";
import Link from "next/link";

const Partners = () => {
  return (
    <div className="w-full">
      <div className="bg-white">
        <div className="max-w-[1240px] mx-auto px-[20px] xs:py-[50px] md:py-[100px] divide-y-[4px]">
          {/* heading */}
          <div className="flex flex-col items-center divide-y-[4px]">
            <div className="text-black text-[24px] font-bold flex space-x-[0px] h-full pt-[0px]">
              <div className="border-b-[5px] font-bold border-[#464A8A] h-full py-[20px] duration-300 group">
                <div className="flex items-center px-[20px] ">
                  <p className="">OUR PARTNERS</p>
                </div>
              </div>
            </div>
          </div>

          {/* partners */}
          <div className="flex xs:flex-col md:flex-row justify-center items-center pt-[50px]">
            <a
              className="w-[120px] m-[30px] cursor-pointer"
              href="https://simsng.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="sims.png" alt="" />
            </a>
            <a
              className="w-[200px] m-[30px] cursor-pointer"
              href="https://www.jumia.com.ng/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="jumia.png" alt="" />
            </a>
            <a
              className="w-[200px] m-[30px] cursor-pointer"
              href="https://www.konga.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="konga.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
