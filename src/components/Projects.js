import React from "react";
import { Link } from "react-router-dom";
import { ProjectData } from "../collections/projectData";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="about-slider h-[440px]">
        <div className="absolute top-[25%] left-[45%]">
          <h3 className="text-6xl pb-9 text-white font-semibold">Projects</h3>
          <p className="text-xl font-semibold">
            <span className="text-red-600 mr-3">
              <Link to="/">HOME</Link>
            </span>
            <span className="text-white text-3xl"> &#62; </span>
            <span className="text-white ml-3">PROJECTS</span>
          </p>
        </div>
      </div>
      <div className="lg:p-32 p-6 lg:grid grid-cols-3 gap-10 bg-gray-100">
        {ProjectData?.map((item) => {
          return (
            <div className="shadow-2xl lg:mt-0 mt-6" key={item.id}>
              <div className="bg-white">
                <img src={item.image} />
                <div>
                  <h2 className="text-red-600 text-center text-3xl font-bold p-5">
                    {item.title}
                  </h2>
                  <p className="text-center pb-10">
                    {item.text.substring(0, 50)}...
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
