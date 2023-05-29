import React from "react";

const BannerVideo = () => {
  return (
    <div className="banner-video w-full">
      <div className="w-[100%]">
        <video autoPlay loop muted playsInline className="w-full">
          <source
            type="video/mp4"
            src="https://newreactwebsite.netlify.app/static/media/video.e926b13910c5d32c9341.mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default BannerVideo;
