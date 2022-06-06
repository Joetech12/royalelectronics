import React, { useState, useEffect } from "react";
import ProductDetail1 from "./ProductDetail1";

const MostPopular = ({}) => {
  return (


    <div className="bg-white transition-all duration-500">
      <div className="max-w-[1240px] mx-auto px-[20px] xs:py-[50px] md:py-[100px]">

      <div className="flex xs:flex-col xs:items-center md:flex-row">

        <ProductDetail1 />
        <ProductDetail1 />
        <ProductDetail1 />
        
      </div>

      </div>
    </div>
  );
};

export default MostPopular;
