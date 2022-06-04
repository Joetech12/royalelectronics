import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Navbar() {
  return (
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
                <div className="text-[15px] cursor-pointer hover:text-white/70 duration-300"><FaFacebookF/></div>
                <div className="text-[15px] cursor-pointer hover:text-white/70 duration-300"><FaInstagram/></div>
                <div className="text-[15px] cursor-pointer hover:text-white/70 duration-300"><FaTwitter/></div>
            </div>
          </div>
          {/* right side */}
          <div className="flex space-x-[20px] items-center">
            <p className="cursor-pointer hover:text-white/70 duration-300 ">STORE LOCATOR</p>
            <p className="font-thin text-white/20 text-[20px]">|</p>
            <p className="cursor-pointer hover:text-white/70 duration-300">CONTACT US</p>
          </div>
        </div>
      </div>

      {/* second nav */}
      <div className=""></div>
    </nav>
  );
}

export default Navbar;
