import React from "react";

const Partners = () => {
  return (
    <div className="w-full">
      <div className="bg-white">
        <div className="max-w-[1240px] mx-auto px-[20px] xs:py-[50px] md:py-[100px]">
          {/* heading */}
          <div className="flex flex-col items-center divide-y-[4px]">
            <div className="text-black text-[24px] font-bold flex space-x-[0px] h-full pt-[0px]">
              <div className="border-b-[5px] font-bold border-[#464A8A] h-full py-[20px] duration-300 group">
                <div className="flex items-center px-[20px] cursor-pointer">
                  <p className="">OUR PARTNERS</p>
                </div>
              </div>
            </div>
          </div>

          {/* partners */}
            <div className="flex justify-center items-center pt-[50px]">
              <div className="w-[100px] m-[30px]"><img src="sims.png" alt=""/></div>
              <div className="w-[200px] m-[30px]"><img src="jumia.png" alt=""/></div>
              <div className="w-[200px] m-[30px]"><img src="konga.png" alt=""/></div>
             
            </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
