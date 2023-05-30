import React from "react";
import AboutImage from "../Images/about-image.jpg";
import { Link } from "react-router-dom";

const BannerAbout = () => {
  return (
    <div className="banner-about lg:p-24 p-8 lg:flex justify-around gap-20">
      <div>
        <h6 className="text-[#b68f40] text-sm">Hakkımızda</h6>
        <h2 className="text-4xl">
          Welcome to the Best Business Support Company
        </h2>
        <p className="border-l-2 border-red-600 my-10 p-2">
          Economic services provided by the finance industry, which encompasses
          a broad range of businesses that manage money, including credit
          unions.
        </p>
        <Link to="/">
          <span className="text-white bg-[#4b5358] py-5 px-8 hover:bg-gray-600">
            Hakkımızda
          </span>
        </Link>
      </div>
      <div className="lg:mt-0 mt-12">
        <img src={AboutImage} alt="about-image" height={650} width={650} />
      </div>
    </div>
  );
};

export default BannerAbout;
