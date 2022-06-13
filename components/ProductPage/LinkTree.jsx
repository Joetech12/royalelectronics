import React from 'react'
import Link from "next/link";

const LinkTree = ({ product, cat, lref }) => {
  return (
    <div className="xs:mt-[60px] md:mt-[108px]">
        <div className="bg-[#f1f1f1]">
            <div className="max-w-[1240px] mx-auto px-[20px]">
                 <div className="flex xs:flex-col md:flex-row justify-center items-center space-x-[20px] py-[30px]">
                     <Link href="/">
                       <p className="font-bold cursor-pointer hover:underline">Home</p>
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