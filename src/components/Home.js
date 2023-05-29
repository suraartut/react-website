import React from "react";
import BannerSlider from "./BannerSlider";
import BannerAbout from "./BannerAbout";
import BannerSuggestion from "./BannerSuggestion";
import BannerDiscover from "./BannerDiscover";
import BannerVideo from "./BannerVideo";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <BannerAbout />
      <BannerSuggestion />
      <BannerDiscover />
      <BannerVideo />
    </div>
  );
};

export default Home;
