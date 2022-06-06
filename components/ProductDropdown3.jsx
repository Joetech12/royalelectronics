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
      <div className="max-w-[1240px] mx-auto h-full flex items-center space-x-[100px] px-[20px]">
        {/* product 1 */}
        <div className="flex flex-col items-center justify-between cursor-pointer h-full ">
          <div className="flex-[5] flex items-end justify-center transition-all duration-500 hover:scale-110">
            <img src="/13.png" alt="" className="w-[160px]" />
          </div>
          <div className="flex-[1] flex items-center justify-center py-[10px]">
            <p className="text-[16px] font-semibold">Inverter AC</p>
          </div>
        </div>
        {/* product 2 */}
        <div className="flex flex-col items-center justify-between cursor-pointer h-full ">
          <div className="flex-[5] flex items-end justify-center transition-all duration-500 hover:scale-110">
            <img src="/14.png" alt="" className="w-[170px]" />
          </div>
          <div className="flex-[1] flex items-center justify-center py-[10px]">
            <p className="text-[16px] font-semibold">Standing plus AC</p>
          </div>
        </div>
        {/* product 3 */}
        <div className="flex flex-col items-center justify-between cursor-pointer h-full ">
          <div className="flex-[5] flex items-end justify-center transition-all duration-500 hover:scale-110">
            <img src="/16.png" alt="" className="w-[41px]" />
          </div>
          <div className="flex-[1] flex items-center justify-center py-[10px]">
            <p className="text-[16px] font-semibold">Standing AC</p>
          </div>
        </div>
        {/* product 4 */}
        <div className="flex flex-col items-center justify-between cursor-pointer h-full ">
          <div className="flex-[5] flex items-end justify-center transition-all duration-500 hover:scale-110">
            <img src="/17.png" alt="" className="w-[180px]" />
          </div>
          <div className="flex-[1] flex items-center justify-center py-[10px]">
            <p className="text-[16px] font-semibold">Non-inverter AC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDropdown;
