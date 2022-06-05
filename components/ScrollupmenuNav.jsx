import React, { useState, useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { RiChatSmile3Fill } from "react-icons/ri";

const ScrollupmenuNav = () => {
  const [scrollup, setScrollup] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setScrollup(true);
      } else {
        setScrollup(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div className="">
      {/* scroll button */}
      <div
        className={
          scrollup
            ? "lg:flex cursor-pointer fixed flex-col z-50 top-[75%] right-0 xs:mr-[20px] md:mr-[40px] duration-300"
            : "lg:flex fixed flex-col z-50 top-[75%] right-0 xs:mr-[20px] md:mr-[40px] opacity-[0%] duration-300"
        }
      >
        <div className="text-[40px] rounded-[50%] shadow-lg outline outline-black/[0.1] outline-[0.5px] text-royal hover:outline-black/[0.05] hover:text-royal/70 duration-300 bg-white xs:p-[0px] md:p-[5px] mb-[20px]">
          <MdKeyboardArrowUp />
        </div>
      </div>

      {/* chat button */}
      <div className="lg:flex fixed flex-col z-50 top-[85%] right-0 xs:mr-[10px] md:mr-[30px]">
        <div className="cursor-pointer text-[40px] rounded-[50%] outline outline-black/[0.1] outline-[0.5px] hover:outline-black/[0.05] hover:shadow-xl duration-300 bg-royal text-white xs:p-[10px] md:p-[14px]">
          <RiChatSmile3Fill />
        </div>
      </div>
    </div>
  );
};

export default ScrollupmenuNav;
