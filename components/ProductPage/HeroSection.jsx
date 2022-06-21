import React from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import {
  dropHandler,
  dropHandler2,
  dropHandler3,
  dropHandler4,
  dropHandler5,
  dropHandler6,
  dropHandler7,
} from "../../slices/dropSlice";
import {
  selectValue,
  selectValue2,
  selectValue3,
  selectValue4,
} from "../../slices/dropSlice";
import { useSelector } from "react-redux";

const HeroSection = ({
  img,
  img2,
  img3,
  img4,
  title,
  desc,
  cat,
  feat1,
  feat2,
  feat3,
  feat4,
  feat5,
  featdesc,
}) => {
  const dispatch = useDispatch();

  const dropValue = useSelector(selectValue);

  const dropValue2 = useSelector(selectValue2);

  const dropValue3 = useSelector(selectValue3);

  const dropValue4 = useSelector(selectValue4);

  // console.log();
  // const [drop, setDrop] = useState(true);
  // const [drop2, setDrop2] = useState(false);

  // const dropHandler = () => {
  //   setDrop(!drop);
  // };
  //   console.log(dropValue, dropValue2, dropValue3);

  return (
    <div className="w-full xs:mt-[200px] md:mt-[200px]">
      <div className="bg-white ">
        <div className="max-w-[1240px] mx-auto px-[20px] xs:py-[50px] md:py-[0px]">
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
                <div
                  className={
                    dropValue4
                      ? "p-[10px] absolute top-0 z-[20] transition-all duration-500 block hover:scale-95 scale-100"
                      : "p-[10px] transition-all duration-500 hover:scale-95 scale-95 hidden"
                  }
                >
                  <img src={img4} alt="" height="450" width="450" />
                </div>
              </div>
              {/* click images */}
              <div className="flex xs:space-x-[10px] md:space-x-[20px] mb-[30px]">
                {img && (
                  <div
                    onClick={() => dispatch(dropHandler4())}
                    className="xs:w-[70px] xs:h-[70px] md:w-[100px] md:h-[100px] outline outline-[1px] p-[10px] transition-all duration-500 hover:scale-105 cursor-pointer"
                  >
                    <img src={img} alt="" objectfit="contain" />
                  </div>
                )}

                {img2 && (
                  <div
                    onClick={() => dispatch(dropHandler5())}
                    className="xs:w-[70px] xs:h-[70px] md:w-[100px] md:h-[100px] outline outline-[1px] p-[10px] transition-all duration-500 hover:scale-105 cursor-pointer"
                  >
                    <img src={img2} alt="" objectfit="contain" />
                  </div>
                )}

                {img3 && (
                  <div
                    onClick={() => dispatch(dropHandler6())}
                    className="xs:w-[70px] xs:h-[70px] md:w-[100px] md:h-[100px] outline outline-[1px] p-[10px] transition-all duration-500 hover:scale-105 cursor-pointer"
                  >
                    <img src={img3} alt="" objectfit="contain" />
                  </div>
                )}

                {img4 && (
                  <div
                    onClick={() => dispatch(dropHandler7())}
                    className="xs:w-[70px] xs:h-[70px] md:w-[100px] md:h-[100px] outline outline-[1px] p-[10px] transition-all duration-500 hover:scale-105 cursor-pointer"
                  >
                    <img src={img4} alt="" objectfit="contain" />
                  </div>
                )}
              </div>
            </div>
            {/* right product name */}
            <div className="flex-1 flex flex-col xs:items-center md:items-start">
              <p className="font-bold mb-[20px] xs:text-[30px] md:text-[60px] xs:leading-[40px] md:leading-[60px] xs:text-center md:text-left">
                {title}
              </p>
              <p className=" xs:text-[20px] md:text-[24px] mb-[40px]">{desc}</p>
              <Link href="/storelocator">
                <button
                  href=""
                  className="outline w-[200px] outline-[2px] bg-gradient-to-r from-[#0e1468] to-[#030632] hover:bg-gradient-to-l duration-300 transition-all text-white rounded-[50px] px-[30px] py-[20px] cursor-pointer"
                >
                  Where to buy
                </button>
              </Link>
            </div>
          </div>

          <div className="divide-y-[3px]">
            {/* desc heading */}
            <div className="">
              <div className="flex flex-col items-center xs:mt-[50px] md:mt-[80px] divide-y-[3px]">
                <div className="text-black text-[24px] font-bold flex space-x-[0px] h-full pt-[0px]">
                  <div className="border-b-[5px] font-bold border-[#464A8A] h-full py-[20px] duration-300 group">
                    <div className="flex items-center px-[20px] ">
                      <p className="">PRODUCT - DETAILS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              {/*features */}
              <div className="xs:mt-[40px] md:mt-[80px] max-w-[900px] mx-auto">
                <p className="font-bold xs:text-[18px] md:text-[24px]">
                  Features:
                </p>
                <ul className="xs:text-[16px] md:text-[18px] list-disc ml-[20px]">
                  <li className="">{feat1}</li>
                  <li className="">{feat2}</li>
                  <li className="">{feat3}</li>
                  <li className="">{feat4}</li>
                  <li className="">{feat5}</li>
                </ul>
              </div>
              {/* desc */}
              <div className="mt-[40px] max-w-[900px] mx-auto">
                <div className="text-[18px] xs:pb-[50px] md:pb-[100px]">
                  <p className="font-bold xs:text-[18px] md:text-[24px]">
                    Description:
                  </p>
                  <p className="xs:text-[16px] md:text-[18px]">{featdesc}</p>
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
