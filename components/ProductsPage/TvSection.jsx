import React from "react";
import { products } from "../../productsAPI";
import ProductDetail3 from "../ProductDetail3";

const TvSection = () => {
  return (
    <div className="w-full">
      <div className="bg-[#f1f1f1]">
        <div className="max-w-[1240px] mx-auto px-[0px] xs:py-[0px] md:py-[0px]">
          <div className="flex xs:flex-nowrap md:flex-wrap xs:flex-col justify-center items-center xs:items-center md:flex-row xs:py-[20px] md:py-[50px]">
            {products.slice(9, 15).map((bg) => (
              <ProductDetail3
                key={bg.id}
                img={bg.img}
                img2={bg.img2}
                name={bg.title}
                desc={bg.desc}
                slug={bg.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvSection;
