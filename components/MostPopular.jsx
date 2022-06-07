import React, { useState, useEffect } from "react";
import ProductDetail1 from "./ProductDetail1";

const MostPopular = ({}) => {
  return (


    <div className="bg-white transition-all duration-500">
      <div className="max-w-[1240px] mx-auto px-[20px] xs:py-[50px] md:py-[100px]">

      <div className="flex xs:flex-col xs:items-center md:flex-row">

        <ProductDetail1 
        img="/13.png" 
        name="Royal Signature"
        desc="Dualcool Inverter Compressor, 2.0HP Cooling Only UVnano, Faster Cooling, Energy Saving with 10 Years Warranty on Compressor"
         />
        <ProductDetail1 
        img="/1.png" 
        name="Royal Double Refrigerator"
        desc="Free standing Electric Oven, Big Capacity, True convection,
        ®EasyClean-LRE3163ST Big Capacity, True convection, ®EasyClean-LRE3163ST"
         />
        <ProductDetail1 
        img="/8.png" 
        name="Boom Boss RXL"
        desc="Free standing Electric Oven, Big Capacity, True convection,
        ®EasyClean-LRE3163ST Big Capacity, True convection, ®EasyClean-LRE3163ST"
         />
        
        
      </div>

      </div>
    </div>
  );
};

export default MostPopular;
