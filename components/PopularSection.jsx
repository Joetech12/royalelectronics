import React, { useState, useEffect, } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import HighlyRated from "./HighlyRated";
import Latest from "./Latest";
import MostPopular from "./MostPopular";
import { useDispatch } from "react-redux";
import { dropHandler, dropHandler2, dropHandler3 } from '../slices/dropSlice';
import { selectValue, selectValue2 } from '../slices/dropSlice';
import { useSelector } from "react-redux";

const PopularSection = () => {


  const dispatch = useDispatch();

  const dropValue = useSelector(selectValue);

  const dropValue2 = useSelector(selectValue2);

  console.log()
  // const [drop, setDrop] = useState(true);
  // const [drop2, setDrop2] = useState(false);

  // const dropHandler = () => {
  //   setDrop(!drop);
  // };

  return (
    <div className="">
      <div className="bg-white text-white text-[13px] ">
        <div className="max-w-[1240px] mx-auto px-[20px] h-full flex justify-center items-center ">
          
          <div className="flex flex-col items-center">
            <div className="text-black text-[20px] font-bold flex space-x-[0px] h-full pt-[20px]">
              {/* most popular */}
              <button
                onClick={() => dispatch(dropHandler3())}
                className="border-b-[5px] font-bold border-[#464A8A]/1 h-full py-[20px] focus:border-[#464A8A] focus:text-royal duration-300 group"
              >
                <div className="flex items-center px-[20px]">
                  <p className="cursor-pointer duration-300 group-hover:text-[#464A8A]">
                    MOST POPULAR
                  </p>
                </div>
              </button>
              {/* latest */}
              <button
                onClick={() => dispatch(dropHandler2())}
                className="border-b-[5px] font-bold border-[#464A8A]/0 h-full py-[20px] focus:border-[#464A8A] focus:text-royal duration-300 group"
              >
                <div className="flex items-center px-[20px]">
                  <p className="cursor-pointer duration-300 group-hover:text-[#464A8A]">
                    LATEST
                  </p>
                </div>
              </button>
              

            </div>

            <div className="text-black text-[20px] font-bold relative">
              <div className="">{dropValue ? <MostPopular /> : null}</div>
              <div className="z-[20] absolute top-0">{dropValue2 ? <Latest /> : null}</div>
              </div>





          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSection;
