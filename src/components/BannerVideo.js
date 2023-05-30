import React from "react";
import BannerVideo1 from "../Images/banner-video.mp4";

const BannerVideo = () => {
  return (
    <div className="banner-video w-full">
      <div className="w-[100%]">
        <video autoPlay loop muted playsInline className="w-full">
          <source type="video/mp4" src={BannerVideo1} />
        </video>
      </div>
    </div>
  );
};

export default BannerVideo;
