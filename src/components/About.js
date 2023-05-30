import React from "react";
import { Link } from "react-router-dom";
import AboutImage from "../Images/about-image.jpg";

const About = () => {
  return (
    <div className="">
      <div className="about-slider w-full h-[440px]">
        <div className="absolute top-[25%] left-[45%]">
          <h3 className="text-6xl pb-9 text-white font-semibold">About</h3>
          <p className="text-xl font-semibold">
            <span className="text-red-600 mr-3">
              <Link to="/">HOME</Link>
            </span>
            <span className="text-white text-3xl"> &#62; </span>
            <span className="text-white ml-3">ABOUT</span>
          </p>
        </div>
      </div>
      <div className="banner-about lg:p-24 p-6 lg:flex justify-around gap-20">
        <div>
          <h6 className="text-[#b68f40] text-sm">Hakkımızda</h6>
          <h2 className="text-4xl">
            Welcome to the Best Business Support Company
          </h2>
          <p className="border-l-2 border-red-600 my-10 p-2">
            Economic services provided by the finance industry, which
            encompasses a broad range of businesses that manage money, including
            credit unions.
          </p>
          <Link to="/">
            <span className="text-white bg-[#4b5358] py-5 px-8 hover:bg-gray-600">
              Hakkımızda
            </span>
          </Link>
        </div>
        <div className="mt-10">
          <img src={AboutImage} alt="about-image" height={650} width={650} />
        </div>
      </div>
    </div>
  );
};

export default About;
