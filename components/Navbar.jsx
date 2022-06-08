import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FiMail } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import ProductDropdown from "./ProductDropdown";
import ProductDropdown2 from "./ProductDropdown2";
import ProductDropdown3 from "./ProductDropdown3";
import TabletNav from "./TabletNav";
import ScrollupmenuNav from "./ScrollupmenuNav";



function Navbar() {
  const [dropnav, setDropnav] = useState(true);
  const [dropnav2, setDropnav2] = useState(true);
  const [dropnav3, setDropnav3] = useState(true);
  

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
  
    // const drophandleNav = () => {
    //   setDropnav(!dropnav);
    // };

  console.log(dropnav);

  return (
    <div className="w-full fixed top-0 z-[99]">
      <nav className="w-full hidden md:block">
        {/* first nav */}
        <div className={navscroll ? "bg-[#0e1468] text-white h-[41px] hidden text-[13px]" : "bg-[#0e1468] text-white h-[41px] text-[13px] "}>
          <div className="max-w-[1240px] px-[20px] mx-auto h-full flex justify-between items-center">
            {/* left side */}
            <div className="flex items-center space-x-[10px] cursor-pointer">
              {/* newsletter */}
              <div className="flex space-x-[5px] hover:text-white/70 duration-300">
                <div className="text-[18px]">
                  <FiMail />
                </div>
                <p className="">SUBSCRIBE TO NEWSLETTER</p>
              </div>
              <p className="font-thin text-white/20 text-[20px]">|</p>
              {/* social media */}
              <div className="flex space-x-[15px]">
                <div className="text-[15px] cursor-pointer hover:text-white/70 duration-300">
                  <FaFacebookF />
                </div>
                <div className="text-[15px] cursor-pointer hover:text-white/70 duration-300">
                  <FaInstagram />
                </div>
                <div className="text-[15px] cursor-pointer hover:text-white/70 duration-300">
                  <FaTwitter />
                </div>
              </div>
            </div>
            {/* right side */}
            <div className="flex space-x-[20px] items-center">
              <p className="cursor-pointer hover:text-white/70 duration-300 ">
                STORE LOCATOR
              </p>
              {/* <p className="font-thin text-white/20 text-[20px]">|</p>
                <p className="cursor-pointer hover:text-white/70 duration-300">CONTACT US</p> */}
            </div>
          </div>
        </div>

        {/* second nav */}
        <div className="bg-white text-white h-[70px] text-[13px] border-b-[2px] shadow-lg">
          <div className="max-w-[1240px] mx-auto px-[20px] h-full flex justify-between items-center">
            {/* left side */}
            <div className="flex items-center">
              {/* logo */}
              <Link href="/">
                <div className="w-[90px] mr-[20px] cursor-pointer">
                  <img src="/royal_logo.svg" alt="" />
                </div>
              </Link>
              <div className="text-black text-[16px] font-bold flex space-x-[0px] h-full ">
                {/* tv */}
                <div
                  onMouseEnter={() => setDropnav(false)}
                  onMouseLeave={() => setDropnav(true)}
                  className="border-b-[5px]  border-[#464A8A]/0 h-full py-[20px] hover:border-[#464A8A] duration-300 group"
                >
                  <div className="flex items-center px-[20px]">
                      <p className="cursor-pointer duration-300 group-hover:text-[#464A8A]">
                        VISION AND SOUND
                      </p>
                      <div className="opacity-[40%]">
                          <MdKeyboardArrowDown />
                      </div>
                  </div>
                  <ProductDropdown hidden={dropnav ? "hidden" : "block"} />
                </div>
                {/* home appliance */}
                <div 
                onMouseEnter={() => setDropnav2(false)}
                onMouseLeave={() => setDropnav2(true)}
                className="border-b-[5px]  border-[#464A8A]/0 h-full py-[20px] hover:border-[#464A8A] duration-300 group">
                  <div className="flex items-center px-[20px]">
                      <p className="cursor-pointer duration-300 group-hover:text-[#464A8A]">
                        HOME APPLIANCE
                      </p>
                      <div className="opacity-[40%]">
                          <MdKeyboardArrowDown />
                      </div>
                  </div>
                  <ProductDropdown2 hidden={dropnav2 ? "hidden" : "block"} />
                </div>
                {/* air conditioner */}
                <div 
                onMouseEnter={() => setDropnav3(false)}
                onMouseLeave={() => setDropnav3(true)}
                className="border-b-[5px]  border-[#464A8A]/0 h-full py-[20px] hover:border-[#464A8A] duration-300 group">
                  <div className="flex items-center px-[20px]">
                      <p className="cursor-pointer duration-300 group-hover:text-[#464A8A]">
                        AIR CONDITIONING
                      </p>
                      <div className="opacity-[40%]">
                          <MdKeyboardArrowDown />
                      </div>
                  </div>
                  <ProductDropdown3 hidden={dropnav3 ? "hidden" : "block"} />
                </div>
                
              </div>
            </div>
            {/* right menus */}
            <div className="">
              <ul className="text-black  text-[16px] font-bold flex items-center space-x-[30px]">
                <li className="cursor-pointer hover:text-[#464A8A] duration-300">
                  BLOG
                </li>
                <p className="font-thin text-royal/90 text-[20px]">|</p>
                <li className="cursor-pointer hover:text-[#464A8A] duration-300">
                  CONTACT US
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* nav for mobile / tablet */}
      <TabletNav />

      {/* scrollup contact icons */}
      <ScrollupmenuNav />

    </div>
  );
}

export default Navbar;
