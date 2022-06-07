import React, { useState, useEffect } from "react";
import ProductDetail2 from "./ProductDetail2";



const Latest = ({ hidden, dropnav }) => {
  

  return (

    <div className="bg-white z-10 transition-all duration-500">
    <div className="max-w-[1240px] mx-auto px-[20px] xs:py-[50px] md:py-[100px]">

    <div className="flex xs:flex-col xs:items-center md:flex-row">

    <ProductDetail2 
        img="/4.png" 
        name="Steel 5c Gas Cooker"
        desc="Free standing Electric Oven, Big Capacity, True convection,
        ®EasyClean-LRE3163ST Big Capacity, True convection, ®EasyClean-LRE3163ST"
         />
        <ProductDetail2 
        img="/6.png" 
        name="Royal Digital Microwave"
        desc="Free standing Electric Oven, Big Capacity, True convection,
        ®EasyClean-LRE3163ST Big Capacity, True convection, ®EasyClean-LRE3163ST"
         />
        <ProductDetail2 
        img="/3.png" 
        name="TwinT Washing Machine"
        desc="Free standing Electric Oven, Big Capacity, True convection,
        ®EasyClean-LRE3163ST Big Capacity, True convection, ®EasyClean-LRE3163ST"
         />
      
    </div>

    </div>
  </div>

  );
};

export default Latest;
