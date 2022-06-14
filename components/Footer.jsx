import React from "react";
import { FiMail } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";



const Footer = () => {
  return (
    <div className=" w-full bg-gradient-to-r from-[#030632] to-[#0e1468] text-white ">
      <div className=" max-w-[1240px] mx-auto px-[20px] h-full flex flex-col justify-center items-center pt-[80px] pb-[30px] divide-y-[1px] divide-[#cfd1fb]/50 ">
        {/* top */}
        <div className="flex md:flex-row xs:flex-col items-start mb-[50px] ">
          {/* company */}
          <div className="flex-[3] flex flex-col xs:mb-[40px] md:mb-[0px]">
            <Link href="/">
              <p className="cursor-pointer font-bold mb-[20px] text-[18px]">
                Royal Electronics Group
              </p>
            </Link>
            <p className="max-w-[900px]">
              We understand your needs like no other brand, that’s because we’ve
              been designing for Nigeria for over 40 years and whether there’s
              been a power-cut, a big party or just a huge load of dirty
              washing, we’ve always been there for you.
            </p>
          </div>
          <div className="flex md:flex-row xs:flex-col">
            {/* customer service */}
            <div className="flex-[1] flex flex-col xs:mb-[40px] md:mb-[0px] xs:mx-[0px] md:mx-[100px]">
              <p className="font-bold mb-[20px] text-[18px]">
                Customer Service
              </p>
              <p className="mb-[7px] cursor-pointer hover:text-white/70 duration-300">
                Buying Guide
              </p>
              <p className="mb-[7px] cursor-pointer hover:text-white/70 duration-300">
                FAQs
              </p>
              <p className="cursor-pointer hover:text-white/70 duration-300 mb-[20px]">
                Warranty
              </p>
              <Link href="/storelocator">
                <p className="font-bold mb-[10px] text-[18px] cursor-pointer hover:text-white/70 duration-300">Store Locator</p>
              </Link>
            </div>
            {/* locate us */}
            <div className="flex-[1] flex flex-col">
              <p className="font-bold mb-[20px] text-[18px]">Locate Us</p>
              <p className="mb-[20px]">
                40 Akin Adesola St, Victoria Island 106104, Lagos
              </p>
              <p className="font-bold mb-[10px] text-[18px]">Follow Us</p>
              <div className="flex space-x-[15px] items-center">
                <a
                  href="https://web.facebook.com/royalelectronicsgroup"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[20px] cursor-pointer hover:text-white/70 duration-300"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/royalelectronicsgroup/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[25px] cursor-pointer hover:text-white/70 duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com/royalelectroni2"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[20px] cursor-pointer hover:text-white/70 duration-300"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="flex justify-between w-full xs:pt-[40px] md:pt-[20px] xs:flex-col md:flex-row text-[14px]">
          <p className="xs:mb-[20px]">
            Copyright © 2021 Royal Electronics Group - All Rights Reserved.
          </p>
          <p className="cursor-pointer hover:text-white/70 duration-300">
            Terms and Conditions | Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
