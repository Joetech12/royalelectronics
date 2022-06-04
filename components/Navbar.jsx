import Link from "next/link";
import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import ProductDropdown from "./ProductDropdown";
import ProductDropdown2 from "./ProductDropdown2";
import ProductDropdown3 from "./ProductDropdown3";
import TabletNav from "./TabletNav";



function Navbar() {
  const [dropnav, setDropnav] = useState(true);
  const [dropnav2, setDropnav2] = useState(true);
  const [dropnav3, setDropnav3] = useState(true);

  
    // const drophandleNav = () => {
    //   setDropnav(!dropnav);
    // };

  console.log(dropnav);

  return (
    <div className="w-full">
      <nav className="w-full hidden md:block">
        {/* first nav */}
        <div className="bg-royal text-white h-[41px] text-[13px]">
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
        <div className="bg-white text-white h-[70px] text-[13px] border-b-[1.8px] shadow-lg">
          <div className="max-w-[1240px] mx-auto px-[20px] h-full flex justify-between items-center">
            {/* left side */}
            <div className="flex items-center">
              {/* logo */}
              <div className="w-[90px] mr-[40px] cursor-pointer">
                <img src="/royal_logo.svg" alt="" />
              </div>
              <div className="text-black text-[16px] font-bold flex space-x-[30px] h-full ">
                {/* tv */}
                <div
                  onMouseEnter={() => setDropnav(false)}
                  onMouseLeave={() => setDropnav(true)}
                  className="border-b-[5px]  border-[#464A8A]/0 h-full py-[20px] hover:border-[#464A8A] duration-300 group"
                >
                  <div className="cursor-pointer duration-300 group-hover:text-[#464A8A]">
                    TV/AUDIO/VIDEO
                  </div>
                  <ProductDropdown hidden={dropnav ? "hidden" : "block"} />
                </div>
                {/* home appliance */}
                <div 
                onMouseEnter={() => setDropnav2(false)}
                onMouseLeave={() => setDropnav2(true)}
                className="border-b-[5px]  border-[#464A8A]/0 h-full py-[20px] hover:border-[#464A8A] duration-300 group">
                  <div className="cursor-pointer duration-300 group-hover:text-[#464A8A]">
                    HOME APPLIANCES
                  </div>
                  <ProductDropdown2 hidden={dropnav2 ? "hidden" : "block"} />
                </div>
                {/* air conditioner */}
                <div 
                onMouseEnter={() => setDropnav3(false)}
                onMouseLeave={() => setDropnav3(true)}
                className="border-b-[5px]  border-[#464A8A]/0 h-full py-[20px] hover:border-[#464A8A] duration-300 group">
                  <div className="cursor-pointer duration-300 group-hover:text-[#464A8A]">
                    AIR CONDITIONERS
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

        
      
    </div>
  );
}

export default Navbar;
