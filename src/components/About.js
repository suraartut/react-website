import React from "react";
import { Link } from "react-router-dom";
import AboutImage from "../Images/about-image.jpg";

const About = () => {
  return (
    <div className="">
      <div className="about w-full h-[440px]">
        <div className="absolute lg:top-[25%] top-[22%] lg:left-[45%] left-[22%]">
          <h3 className="lg:text-6xl text-4xl lg:pb-9 pb-2 text-[#aa8232] font-semibold text-center">
            About
          </h3>
          <p className="lg:text-xl text-lg font-semibold text-center">
            <span className="text-[#4b5358] mr-3">
              <Link to="/">HOME</Link>
            </span>
            <span className="text-[#4b5358] text-3xl"> &#62; </span>
            <span className="text-[#aa8232] ml-3">ABOUT</span>
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
