import React, { useState, useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { RiChatSmile3Fill } from "react-icons/ri";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const ScrollupmenuNav = () => {
  const [chat, setChat] = useState(false);

  const handleChat = () => {
    setChat(!chat);
  };

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
      {/* chat box */}
      <div
        className={
          chat
            ? "bg-white flex flex-col fixed z-60 top-[35%] right-0 xs:mr-[10px] md:mr-[30px] w-[300px] h-[300px] block shadow-xl ease-in-out transition-all duration-[1000ms]"
            : "bg-white  hidden fixed z-60 top-[35%] right-0 xs:mr-[10px] md:mr-[30px] w-[300px] h-[300px] shadow-xl transition-all ease-in-out duration-[1000ms]"
        }
      >
        <div className="bg-[#0e1468]">
          <p className="text-white font-bold text-[30px] text-center pt-[20px] pb-[5px]">
            Hi There!
          </p>
          <p className="text-white  text-[14px] text-center py-[10px] px-[30px]">
            Click to chat with our Service Agent <br />{" "}
            <div className="font-bold text-[18px]">on WhatsApp</div>
          </p>
        </div>
        <a href="https://wa.link/3pkpmh" target="_blank" rel="noreferrer">
          <div className="flex flex-col justify-center items-center pt-[10px] pb-[0px]">
            <div className="w-[200px] mb-[17px] cursor-pointer">
              <img src="/agent.svg" alt="" />
            </div>
            <p className="text-[12px] font-semibold">
              Powered by Vexceed Technologies Ltd
            </p>
          </div>
        </a>
      </div>

      {/* scroll button */}
      <Link href="#">
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
      </Link>

      {/* chat button */}
      <div
        onClick={handleChat}
        className="lg:flex fixed flex-col z-50 top-[85%] right-0 xs:mr-[10px] md:mr-[30px]"
      >
        <div className="cursor-pointer text-[40px] rounded-[50%] outline outline-black/[0.1] outline-[0.5px] hover:outline-black/[0.05] hover:shadow-xl duration-300 bg-royal text-white xs:p-[10px] md:p-[14px]">
          {/* <RiChatSmile3Fill /> */}
          {chat ? <AiOutlineClose /> : <RiChatSmile3Fill />}
        </div>
      </div>
    </div>
  );
};

export default ScrollupmenuNav;
