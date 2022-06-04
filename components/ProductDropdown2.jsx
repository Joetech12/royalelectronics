import React from 'react'

const ProductDropdown = ({ hidden, dropnav }) => {

   

  return (
    <div className={`bg-white h-[220px] ${hidden} absolute right-0 top-[111px] left-0 z-10 transition-all duration-500`}>
            <div className="max-w-[1240px] mx-auto h-full flex items-center justify-between space-x-[10px]">
                {/* product 1 */}
                <div className="flex flex-col items-center justify-between cursor-pointer h-full ">
                    <div className="flex-[5] flex items-end justify-center transition-all duration-500 hover:scale-110">
                      <img src="/2.png" alt="" className="w-[180px]"/>
                    </div>
                    <div className="flex-[1] flex items-center justify-center py-[10px]">
                        <p className="text-[16px] font-semibold">Chest Freezer</p>
                    </div>
                </div>
                {/* product 2 */}
                <div className="flex flex-col items-center justify-between cursor-pointer h-full ">
                    <div className="flex-[5] flex items-end justify-center transition-all duration-500 hover:scale-110">
                      <img src="/1.png" alt="" className="w-[60px]"/>
                    </div>
                    <div className="flex-[1] flex items-center justify-center py-[10px]">
                        <p className="text-[16px] font-semibold">Refrigerator</p>
                    </div>
                </div>
                {/* product 3 */}
                <div className="flex flex-col items-center justify-between cursor-pointer h-full ">
                    <div className="flex-[5] flex items-end justify-center transition-all duration-500 hover:scale-110">
                      <img src="/3.png" alt="" className="w-[110px]"/>
                    </div>
                    <div className="flex-[1] flex items-center justify-center py-[10px]">
                        <p className="text-[16px] font-semibold">Washing Machine</p>
                    </div>
                </div>
                
                {/* product 4 */}
                <div className="flex flex-col items-center justify-between cursor-pointer h-full ">
                    <div className="flex-[5] flex items-end justify-center transition-all duration-500 hover:scale-110">
                      <img src="/4.png" alt="" className="w-[70px]"/>
                    </div>
                    <div className="flex-[1] flex items-center justify-center py-[10px]">
                        <p className="text-[16px] font-semibold">Gas Cooker</p>
                    </div>
                </div>
                
                {/* product 5 */}
                <div className="flex flex-col items-center justify-between cursor-pointer h-full ">
                    <div className="flex-[5] flex items-end justify-center transition-all duration-500 hover:scale-110">
                      <img src="/5.png" alt="" className="w-[80px]"/>
                    </div>
                    <div className="flex-[1] flex items-center justify-center py-[10px]">
                        <p className="text-[16px] font-semibold">Blender</p>
                    </div>
                </div>
                
               
                
            </div>
        </div>
  )
}

export default ProductDropdown