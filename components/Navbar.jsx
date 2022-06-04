import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import ProductDropdown from "./ProductDropdown";

function Navbar() {
  return (
    <div className="w-full">
        <nav className="w-full">
          {/* first nav */}
          <div className="bg-royal text-white h-[41px] text-[13px]">
            <div className="max-w-[1240px] mx-auto h-full flex justify-between items-center">
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
            <div className="max-w-[1240px] mx-auto h-full flex justify-between items-center">
              {/* left side */}
              <div className="flex items-center">
                {/* logo */}
                <div className="w-[90px] mr-[40px]">
                  <img src="/royal_logo.svg" alt="" />
                </div>
                <div className="text-black text-[16px] font-bold flex space-x-[30px] h-full ">
                    {/* tv */}
                  <div className="border-b-[5px]  border-[#464A8A]/0 h-full py-[20px] hover:border-[#464A8A] duration-300 group">
                    <div className="cursor-pointer duration-300 group-hover:text-[#464A8A]">
                      TV/AUDIO/VIDEO
                    </div>
                  </div>
                    {/* home appliance */}
                  <div className="border-b-[5px]  border-[#464A8A]/0 h-full py-[20px] hover:border-[#464A8A] duration-300 group">
                    <div className="cursor-pointer duration-300 group-hover:text-[#464A8A]">
                    HOME APPLIANCES
                    </div>
                  </div>
                    {/* air conditioner */}
                  <div className="border-b-[5px]  border-[#464A8A]/0 h-full py-[20px] hover:border-[#464A8A] duration-300 group">
                    <div className="cursor-pointer duration-300 group-hover:text-[#464A8A]">
                    AIR CONDITIONERS
                    </div>
                  </div>
                  {/* <div className="cursor-pointer">HOME APPLIANCES</div>
                  <div className="cursor-pointer">AIR CONDITIONERS</div> */}
                </div>
              </div>
              {/* right menus */}
              <div className="">
                <ul className="text-black  text-[16px] font-bold flex items-center space-x-[30px]">
                  <li className="cursor-pointer hover:text-[#464A8A] duration-300">BLOG</li>
                  <p className="font-thin text-royal/90 text-[20px]">|</p>
                  <li className="cursor-pointer hover:text-[#464A8A] duration-300">CONTACT US</li>
                </ul>
              </div>
            </div>
          </div>
        </nav>


        {/* product dropdown */}
        <ProductDropdown />

    </div>

    
  );
}

export default Navbar;
