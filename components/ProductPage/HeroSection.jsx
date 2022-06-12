import React from "react";
import { useDispatch } from "react-redux";
import {
  dropHandler,
  dropHandler2,
  dropHandler3,
  dropHandler4,
  dropHandler5,
  dropHandler6,
} from "../../slices/dropSlice";
import {
  selectValue,
  selectValue2,
  selectValue3,
} from "../../slices/dropSlice";
import { useSelector } from "react-redux";




const HeroSection = ({img, img2, img3, title, desc}) => {
  const dispatch = useDispatch();

  const dropValue = useSelector(selectValue);

  const dropValue2 = useSelector(selectValue2);

  const dropValue3 = useSelector(selectValue3);

  // console.log();
  // const [drop, setDrop] = useState(true);
  // const [drop2, setDrop2] = useState(false);

  // const dropHandler = () => {
  //   setDrop(!drop);
  // };
//   console.log(dropValue, dropValue2, dropValue3);

  return (
    <div className="w-full">
      <div className="bg-white">
        <div className="max-w-[1240px] mx-auto px-[20px] xs:py-[0px] md:py-[0px]">
          {/* product overview */}
          <div className="flex md:flex-row xs:flex-col items-center">
            {/* left image */}
            <div className="flex-1 flex flex-col items-center justify-center">
              {/* main image */}
              <div className="relative">
                <div
                  className={
                    dropValue
                      ? "p-[10px] transition-all duration-500 opacity-[100%] hover:scale-95 "
                      : "p-[10px] transition-all duration-500 hover:scale-95 opacity-[0%] "
                  }
                >
                  <img src={img} alt="" height="450" width="450" />
                </div>
                <div
                  className={
                    dropValue2
                      ? "p-[10px] absolute top-0 z-[20] transition-all duration-500 block hover:scale-95"
                      : "p-[10px] transition-all duration-500 hover:scale-95 hidden"
                  }
                >
                  <img src={img2} alt="" height="450" width="450" />
                </div>
                <div
                  className={
                    dropValue3
                      ? "p-[10px] absolute top-0 z-[20] transition-all duration-500 block hover:scale-95 scale-100"
                      : "p-[10px] transition-all duration-500 hover:scale-95 scale-95 hidden"
                  }
                >
                  <img src={img3} alt="" height="450" width="450" />
                </div>
              </div>
              {/* click images */}
              <div className="flex xs:space-x-5 mb-[30px]">
                <div
                  onClick={() => dispatch(dropHandler4())}
                  className="xs:w-[70px] xs:h-[70px] md:w-[100px] md:h-[100px] outline outline-[1px] p-[10px] transition-all duration-500 hover:scale-105 cursor-pointer"
                >
                  <img src={img} alt="" objectfit="contain" />
                </div>
                <div
                  onClick={() => dispatch(dropHandler5())}
                  className="xs:w-[70px] xs:h-[70px] md:w-[100px] md:h-[100px] outline outline-[1px] p-[10px] transition-all duration-500 hover:scale-105 cursor-pointer"
                >
                  <img src={img2} alt="" objectfit="contain" />
                </div>
                <div
                  onClick={() => dispatch(dropHandler6())}
                  className="xs:w-[70px] xs:h-[70px] md:w-[100px] md:h-[100px] outline outline-[1px] p-[10px] transition-all duration-500 hover:scale-105 cursor-pointer"
                >
                  <img src={img3} alt="" objectfit="contain" />
                </div>
              </div>
            </div>
            {/* right product name */}
            <div className="flex-1 flex flex-col xs:items-center md:items-start">
              <p className="font-bold xs:text-[30px] md:text-[60px]">
                {desc}
              </p>
              <p className=" xs:text-[15px] md:text-[20px] mb-[40px]">
              {title}
              </p>
              <button
                href=""
                className="outline w-[200px] outline-[2px] bg-gradient-to-r from-[#0e1468] to-[#030632] hover:bg-gradient-to-l duration-300 transition-all text-white rounded-[50px] px-[30px] py-[20px] cursor-pointer"
              >
                Where to buy
              </button>
            </div>
          </div>

          <div className="divide-y-[3px]">
            {/* desc heading */}
            <div className="">
              <div className="flex flex-col items-center xs:mt-[50px] md:mt-[80px] divide-y-[3px]">
                <div className="text-black text-[24px] font-bold flex space-x-[0px] h-full pt-[0px]">
                  <div className="border-b-[5px] font-bold border-[#464A8A] h-full py-[20px] duration-300 group">
                    <div className="flex items-center px-[20px] ">
                      <p className="">DESCRIPTION</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              {/*features */}
              <div className="xs:mt-[40px] md:mt-[80px] max-w-[900px] mx-auto">
                <p className="font-bold xs:text-[18px] md:text-[20px]">
                  Product Features:
                </p>
                <div className="xs:text-[16px] md:text-[18px]">
                  <p className="">BT Version: V5.0</p>
                  <p className="">BT Range: ≥10m</p>
                  <p className="">Battery Capacity: 350mAh</p>
                  <p className="">Standby Time: Up to 40 hours</p>
                  <p className="">Play Time: Up to 10 hours (60% volume)</p>
                  <p className="">Talk Time: Up to 12 hours</p>
                </div>
              </div>
              {/* desc */}
              <div className="mt-[40px] max-w-[900px] mx-auto">
                <div className="text-[18px]">
                  <p className="font-bold xs:text-[18px] md:text-[20px]">
                    Immersive Sound:
                  </p>
                  <p className="xs:text-[16px] md:text-[18px]">
                    Professionally tuned huge sound is delivered through 40mm
                    drivers for a spine-tingling and immersive listening
                    experience.
                  </p>
                </div>
                <div className="text-[18px] mt-[20px]">
                  <p className="font-bold xs:text-[18px] md:text-[20px]">
                    Comfortable Fit:
                  </p>
                  <p className="xs:text-[16px] md:text-[18px]">
                    Lightweight design, adjustable headband, and soft cushion
                    earcups define a comfortable fit.
                  </p>
                </div>
                <div className="text-[18px] mt-[20px]">
                  <p className="font-bold xs:text-[18px] md:text-[20px]">
                    LED Light Show:
                  </p>
                  <p className="xs:text-[16px] md:text-[18px]">
                    Designed to add more fun and interaction with the built-in
                    multi-color light show.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
