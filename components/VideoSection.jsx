import React from "react";
import ReactPlayer from "react-player";

const VideoSection = () => {
  return (
    <div className="w-full bg-royal">
      <div className="flex justify-center my-[80px]">
        {/* <video 
        src="/sign.mp4" 
        autoPlay={true} 
        loop 
        controls/> */}
        <video
          className=" bg-gray-900 bg-blend-multiply object-cover h-full w-full"
          src="/sign.mp4"
          autoPlay
          loop
          muted
          controls
        />
      </div>
    </div>
  );
};

export default VideoSection;
