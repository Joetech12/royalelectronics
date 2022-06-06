import React, { useState, useEffect } from "react";
import ProductDetail2 from "./ProductDetail2";



const Latest = ({ hidden, dropnav }) => {
  

  return (

    <div className="bg-white z-10 transition-all duration-500">
    <div className="max-w-[1240px] mx-auto px-[20px] xs:py-[50px] md:py-[100px]">

    <div className="flex xs:flex-col xs:items-center md:flex-row">

      <ProductDetail2 />
      <ProductDetail2 />
      <ProductDetail2 />
      
    </div>

    </div>
  </div>

  );
};

export default Latest;
