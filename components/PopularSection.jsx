import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import HighlyRated from "./HighlyRated";
import Latest from "./Latest";
import MostPopular from "./MostPopular";

const PopularSection = () => {

  const [drop, setDrop] = useState(true);

  const dropHandler = () => {
    setDrop(!drop);
  };

  return (
    <div className="h-[800px]">
      <div className="bg-white text-white h-[70px] text-[13px] border-b-[2px]">
        <div className="max-w-[1240px] mx-auto px-[20px] h-full flex justify-center items-center">
          <div className="flex items-center">
            <div className="text-black text-[16px] font-bold flex space-x-[0px] h-full ">
              {/* tv */}
              <div
                onClick={() => dropHandler}
                className="border-b-[5px]  border-[#464A8A]/0 h-full py-[20px] hover:border-[#464A8A] duration-300 group"
              >
                  <p className="cursor-pointer duration-300 group-hover:text-[#464A8A]">
                    VISION AND SOUND
                  </p>
              </div>

              



            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSection;
