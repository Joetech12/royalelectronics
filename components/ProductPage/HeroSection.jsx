import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="bg-white">
        <div className="max-w-[1240px] mx-auto px-[20px] xs:py-[0px] md:py-[100px]">
          {/* product overview */}
          <div className="flex md:flex-row xs:flex-col items-center ">
            {/* left image */}
            <div className="flex-1 flex justify-center">
              <img src="/2.png" alt="" />
            </div>
            {/* right product name */}
            <div className="flex-1 flex flex-col xs:items-center md:items-start">
              <p className="font-bold xs:text-[30px] md:text-[60px]">UHD 4K TV A7G</p>
              <p className=" xs:text-[15px] md:text-[20px] mb-[40px]">UHD 4K TV A7G</p>
              <button
                href=""
                className="outline w-[200px] outline-[2px] bg-gradient-to-r from-[#0e1468] to-[#030632] hover:bg-gradient-to-l duration-300 transition-all text-white rounded-[50px] px-[30px] py-[20px] cursor-pointer"
              >
                Where to buy
              </button>
            </div>
          </div>

          {/* desc heading */}
          <div className="flex flex-col items-center xs:mt-[50px] md:mt-[100px]">
            <div className="text-black text-[24px] font-bold flex space-x-[0px] h-full pt-[0px]">
              <div className="border-b-[5px] font-bold border-[#464A8A] h-full py-[20px] duration-300 group">
                <div className="flex items-center px-[20px] ">
                  <p className="">DESCRIPTION</p>
                </div>
              </div>
            </div>
          </div>

          {/*features */}
          <div className="xs:mt-[40px] md:mt-[80px] max-w-[900px] mx-auto">
            <p className="font-bold xs:text-[18px] md:text-[20px]">Product Features:</p>
            <div className="xs:text-[16px] md:text-[18px]">
              <p className="">BT Version: V5.0</p>
              <p className="">BT Range: ≥10m</p>
              <p className="">Battery Capacity: 350mAh</p>
              <p className="">Standby Time: Up to 40 hours</p>
              <p className="">Play Time: Up to 10 hours (60% volume)</p>
              <p className="">Talk Time: Up to 12 hours</p>
            </div>
          </div>
          {/* desc */}
          <div className="mt-[40px] max-w-[900px] mx-auto">
            <div className="text-[18px]">
              <p className="font-bold xs:text-[18px] md:text-[20px]">Immersive Sound:</p>
              <p className="xs:text-[16px] md:text-[18px]">
                Professionally tuned huge sound is delivered through 40mm
                drivers for a spine-tingling and immersive listening experience.
              </p>
            </div>

            <div className="text-[18px] mt-[20px]">
              <p className="font-bold xs:text-[18px] md:text-[20px]">Comfortable Fit:</p>
              <p className="xs:text-[16px] md:text-[18px]">
                Lightweight design, adjustable headband, and soft cushion
                earcups define a comfortable fit.
              </p>
            </div>

            <div className="text-[18px] mt-[20px]">
              <p className="font-bold xs:text-[18px] md:text-[20px]">LED Light Show:</p>
              <p className="xs:text-[16px] md:text-[18px]">
                Designed to add more fun and interaction with the built-in
                multi-color light show.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
