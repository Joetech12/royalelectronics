import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";


const TabletNav = () => {

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };



  return (
    <nav className="w-full md:hidden">
       <div className="bg-white h-[70px] text-[13px] border-b-[1.8px] shadow-lg">
       <div className="max-w-[1240px] mx-auto px-[20px] h-full flex justify-between items-center">
            {/* left side */}
            <div className="flex items-center">
              {/* logo */}
              <div className="w-[90px] mr-[40px] cursor-pointer">
                <img src="/royal_logo.svg" alt="" />
              </div>
            </div>
            {/* right menus */}
            <div className="">
              <div onClick={handleNav} className="text-[25px] text-royal">
              <AiOutlineMenu />
              </div>
            </div>
          </div>
       </div>



      {/* slidein menu */}
       <div
          className={!nav ? "fixed md:hidden bg-white h-full w-[80%] left-[-100%] top-0 flex flex-col items-start pt-[10px] pb-[50px] px-[50px] ease-in-out duration-[300ms] z-20 " : "fixed md:hidden bg-white h-full w-[80%] top-0 flex flex-col items-start pt-[15px] pb-[50px] px-[50px] z-20 left-[0] ease-in-out duration-[300ms]"}
        >
          <div className="flex items-center justify-between mb-[50px] w-full">
            {/* logo */}
          <div className="w-[90px] mr-[40px]">
            <img src="/royal_logo.svg" alt="" />
            </div>
            {/* close menu */}
            <div onClick={handleNav} className="text-[30px] text-royal cursor-pointer">
              <AiOutlineClose /> 
            </div>
          </div>


          <ul className=" uppercase w-full">
            <li className='flex items-center justify-between w-full my-[50px]'>
              <p className="cursor-pointer hover:text-[#464A8A]">
                HOME
              </p>
              <div className="text-[25px] text-royal cursor-pointer">
              <MdOutlineKeyboardArrowRight /> 
            </div>
            </li>

            <li className='flex items-center justify-between w-full my-[50px]'>
              <p className="cursor-pointer hover:text-[#464A8A]">
              TV/AUDIO/VIDEO
              </p>
              <div className="text-[25px] text-royal cursor-pointer">
              <MdOutlineKeyboardArrowRight /> 
            </div>
            </li>

            <li className='flex items-center justify-between w-full my-[50px]'>
              <p className=" cursor-pointer hover:text-[#464A8A]">
              HOME APPLIANCES
              </p>
              <div className="text-[25px] text-royal cursor-pointer">
              <MdOutlineKeyboardArrowRight /> 
            </div>
            </li>

            <li className='flex items-center justify-between w-full my-[50px]'>
              <p className=" cursor-pointer hover:text-[#464A8A]">
              AIR CONDITIONERS
              </p>
              <div className="text-[25px] text-royal cursor-pointer">
              <MdOutlineKeyboardArrowRight /> 
            </div>
            </li>

            <li className='flex items-center justify-between w-full my-[50px]'>
              <p className=" cursor-pointer hover:text-[#464A8A]">
              BLOG
              </p>
              <div className="text-[25px] text-royal cursor-pointer">
              <MdOutlineKeyboardArrowRight /> 
            </div>
            </li>

            <li className='flex items-center justify-between w-full my-[50px]'>
              <p className="cursor-pointer hover:text-[#464A8A]">
              CONTACT US
              </p>
              <div className="text-[25px] text-royal cursor-pointer">
              <MdOutlineKeyboardArrowRight /> 
            </div>
            </li>

            <li className='flex items-center justify-between w-full my-[50px]'>
              <p className="cursor-pointer hover:text-[#464A8A]">
              STORE LOCATOR
              </p>
              <div className="text-[25px] text-royal cursor-pointer">
              <MdOutlineKeyboardArrowRight /> 
            </div>
            </li>
            
          </ul>
        </div>


      </nav>
  )
}

export default TabletNav