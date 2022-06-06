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
    <div className="h-[800px]">
      <div className="bg-white text-white h-[70px] text-[13px]">
        <div className="max-w-[1240px] mx-auto px-[20px] h-full flex justify-center items-center">
          <div className="flex items-center">
            <div className="text-black text-[18px] font-bold flex space-x-[0px] h-full ">
              {/* most popular */}
              <div
                onClick={() => dispatch(dropHandler3())}
                className="border-b-[5px]  border-[#464A8A]/0 h-full py-[20px] hover:border-[#464A8A] duration-300 group"
              >
                <div className="flex items-center px-[20px]">
                  <p className="cursor-pointer duration-300 group-hover:text-[#464A8A]">
                    MOST POPULAR
                  </p>
                </div>
              </div>
              {/* latest */}
              <div
                onClick={() => dispatch(dropHandler2())}
                className="border-b-[5px]  border-[#464A8A]/0 h-full py-[20px] hover:border-[#464A8A] duration-300 group"
              >
                <div className="flex items-center px-[20px]">
                  <p className="cursor-pointer duration-300 group-hover:text-[#464A8A]">
                    LATEST
                  </p>
                </div>
              </div>

               {/* dropProducts */}

              {dropValue ? <MostPopular /> : null}

              {dropValue2 ? <Latest /> : null}

               {/* { drop2 ? <Latest /> : null} */}




            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSection;
