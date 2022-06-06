import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";




const ServiceFeature = () => {
  return (
    <div className="bg-white xs:max-w-[800px] py-[50px] px-[20px] mx-[10px] flex flex-col justify-center items-center">
              {/* Image */}
            <div className="mb-[20px]">
              <img src="/savings.jpeg" alt="" />
            </div>
            <div className="flex flex-col justify-start">
                {/* Title */}
                <p className="font-bold text-[24px] mb-[10px]">GenPAL Inverter Technology</p>
                {/* Link */}
                <div className="flex items-center  group hover:underline hover:text-royal underline-offset-[5px]">
                    <p href="" className="cursor-pointer">
                      LEARN MORE
                    </p>
                    <div className="text-[25px] text-royal cursor-pointer">
                      <MdOutlineKeyboardArrowRight />
                    </div>
                </div>
            </div>
          </div>
  )
}

export default ServiceFeature