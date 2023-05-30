import React from "react";
import { Link } from "react-router-dom";

const BannerDiscover = () => {
  return (
    <div className="banner-discover h-screen relative">
      <div className="absolute lg:top-1/2 top-[20%] lg:left-[25%] lg:w-1/2 w-full">
        <p className="text-white font-semibold text-2xl mb-12 lg:px-0 px-10">
          Strategies That Work Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Fuga velit, assumenda ipsa, facere ducimus id rerum,
          itaque minus dolore porro quis animi ea architecto iure commodi. Fuga
          iure harum beatae?
        </p>
        <Link
          to="/"
          className="bg-[#b68f40] hover:bg-[#b68f00] text-white py-5 px-12 lg:mx-0 mx-10"
        >
          Discover
        </Link>
      </div>
    </div>
  );
};

export default BannerDiscover;
