import React, { useState, useEffect } from "react";
import Link from "next/link";

const LinkTree = ({ product, cat, lref }) => {


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
    <div className={
      navscroll
        ? "xs:mt-[60px] w-full mx-auto fixed xs:top-[0px] md:top-[50px] z-[80] md:mt-[10px]"
        : "xs:mt-[60px] w-full mx-auto fixed xs:top-[0px] md:top-[50px] z-[80] md:mt-[60px]"
    }>
        <div className="bg-[#f1f1f1]">
            <div className="max-w-[1240px] mx-auto px-[20px]">
                 <div className="flex xs:flex-col xs:items-center md:flex-row justify-center items-center space-x-[20px] py-[30px]">
                     <Link href="/">
                       <p className="font-bold cursor-pointer hover:underline text-center">Home</p>
                     </Link>
                     <p className="">/</p>
                     {/* <p className="font-bold cursor-pointer hover:underline">Royal Products</p>
                     <p className="">/</p> */}
                     <Link href={lref}>
                       <p className="font-bold cursor-pointer hover:underline">{cat}</p>
                     </Link>
                     <p className="">/</p>
                     <p className="font-bold text-black/40">{product}</p>
                 </div> 
            </div>
        </div>
    </div>
  )
}

export default LinkTree