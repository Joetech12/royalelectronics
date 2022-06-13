import React from 'react'

const Hero = ({ img }) => {
  return (
    <div>

      <div
        className="w-full select-none relative xs:mt-[60px] md:mt-[108px]"
      >
        <div className="max-w-[1240px] mx-auto flex justify-center relative xs:px-[0px] md:px-[20px]">
          <div className="absolute w-full top-1/2 z-[60] transform -translate-y-1/2 xs:px-[5px] md:px-[30px] flex justify-between items-center">
          </div>
          <img src={img} alt="" objectfit="cover" />
        </div>
      </div>
    </div>
  )
}

export default Hero