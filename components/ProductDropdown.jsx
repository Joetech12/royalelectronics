import React, { useState, useEffect } from "react";

const ProductDropdown = ({ hidden, dropnav }) => {
  const [navscroll, setNavscroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setNavscroll(true);
      } else {
        setNavscroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={
        navscroll
          ? `bg-white h-[220px] ${hidden} absolute right-0 top-[70px] left-0 z-10 transition-all duration-500`
          : `h-[220px] ${hidden} bg-white absolute right-0 top-[111px] left-0 z-10 transition-all duration-500`
      }
    >
      <div className="max-w-[1240px] mx-auto h-full flex justify-start items-start px-[20px] space-x-[50px]">
        {/* product 1 */}
        <div className="flex flex-col items-center justify-center cursor-pointer h-full relative">
          <div className="flex-[3] flex items-end justify-center transition-all duration-500 hover:scale-110 ">
            <img src="/7.png" alt="" className="w-[130px]" />
          </div>
          <div className="flex-[1] flex items-center justify-center py-[0px]">
            <p className="text-[16px] font-semibold">Television</p>
          </div>
        </div>
        {/* product 2 */}
        <div className="flex flex-col items-center justify-between cursor-pointer h-full ">
          <div className="flex-[3] flex items-end justify-center transition-all duration-500 hover:scale-110">
            <img src="/11.png" alt="" className="w-[130px]" />
          </div>
          <div className="flex-[1] flex items-center justify-center py-[0px]">
            <p className="text-[16px] font-semibold">Home Theater</p>
          </div>
        </div>
        {/* product 3 */}
        <div className="flex flex-col items-center justify-between cursor-pointer h-full ">
          <div className="flex-[3] flex items-end justify-center transition-all duration-500 hover:scale-110">
            <img src="/12.png" alt="" className="w-[130px]" />
          </div>
          <div className="flex-[1] flex items-center justify-center py-[0px]">
            <p className="text-[16px] font-semibold">Sound Box</p>
          </div>
        </div>

        {/* product 4 */}
        <div className="flex flex-col items-center justify-between cursor-pointer h-full ">
          <div className="flex-[3] flex items-end justify-center transition-all duration-500 hover:scale-110">
            <img src="/8.png" alt="" className="w-[130px]" />
          </div>
          <div className="flex-[1] flex items-center justify-center py-[0px]">
            <p className="text-[16px] font-semibold">Boom Box</p>
          </div>
        </div>

        {/* product 5 */}
        {/* <div className="flex flex-col items-center justify-between cursor-pointer h-full ">
          <div className="flex-[5] flex items-end justify-center transition-all duration-500 hover:scale-110">
            <img src="/5.png" alt="" className="w-[150px]" />
          </div>
          <div className="flex-[1] flex items-center justify-center py-[10px]">
            <p className="text-[16px] font-semibold">Blender</p>
          </div>
        </div> */}

        {/* product 6 */}
        {/* <div className="flex flex-col items-center justify-between cursor-pointer h-full ">
                    <div className="flex-[5] flex items-end justify-center transition-all duration-500 hover:scale-110">
                      <img src="/6.png" alt="" className="w-[150px]"/>
                    </div>
                    <div className="flex-[1] flex items-center justify-center py-[10px]">
                        <p className="text-[16px] font-semibold">Microwave</p>
                    </div>
                </div> */}
      </div>
    </div>
  );
};

export default ProductDropdown;
