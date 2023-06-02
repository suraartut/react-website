import React from "react";

const BannerVideo = () => {
  return (
    <div className="banner-video w-full">
      <div className="w-[100%]">
        <video autoPlay loop muted playsInline className="w-full">
          <source
            type="video/mp4"
            src="https://res.cloudinary.com/dvxypv76w/video/upload/v1685712671/banner-video_rh4smt.mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default BannerVideo;
