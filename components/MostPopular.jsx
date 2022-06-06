import React, { useState, useEffect } from "react";


const MostPopular = ({  }) => {

  

  return (
    
    <div className="bg-white h-[220px] absolute right-0 top-[1474px] left-0 z-10 transition-all duration-500">
                  <div className="max-w-[1240px] mx-auto h-full flex justify-center items-center px-[20px] space-x-[50px]">
                    {/* product 1 */}
                    <div className="flex flex-col items-center justify-between cursor-pointer h-full ">
                      <div className="flex-[5] flex items-end justify-center transition-all duration-500 hover:scale-110">
                        <img src="/7.png" alt="" className="w-[180px]" />
                      </div>
                      <div className="flex-[1] flex items-center justify-center py-[10px]">
                        <p className="text-[16px] font-semibold">Television</p>
                      </div>
                    </div>
                    {/* product 2 */}
                    <div className="flex flex-col items-center justify-between cursor-pointer h-full ">
                      <div className="flex-[5] flex items-end justify-center transition-all duration-500 hover:scale-110">
                        <img src="/11.png" alt="" className="w-[200px]" />
                      </div>
                      <div className="flex-[1] flex items-center justify-center py-[10px]">
                        <p className="text-[16px] font-semibold">
                          Home Theatre
                        </p>
                      </div>
                    </div>
                    {/* product 3 */}
                    <div className="flex flex-col items-center justify-between cursor-pointer h-full ">
                      <div className="flex-[5] flex items-end justify-center transition-all duration-500 hover:scale-110">
                        <img src="/12.png" alt="" className="w-[200px]" />
                      </div>
                      <div className="flex-[1] flex items-center justify-center py-[10px]">
                        <p className="text-[16px] font-semibold">Sound Bar</p>
                      </div>
                    </div>

                    {/* product 4 */}
                    <div className="flex flex-col items-center justify-between cursor-pointer h-full ">
                      <div className="flex-[5] flex items-end justify-center transition-all duration-500 hover:scale-110">
                        <img src="/8.png" alt="" className="w-[200px]" />
                      </div>
                      <div className="flex-[1] flex items-center justify-center py-[10px]">
                        <p className="text-[16px] font-semibold">Boom Box</p>
                      </div>
                    </div>
                  </div>
                </div>
  );
};

export default MostPopular;
