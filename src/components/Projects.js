import React from "react";
import { Link } from "react-router-dom";
import { ProjectData } from "../collections/projectData";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="projects h-[440px]">
        <div className="absolute lg:top-[20%] top-[22%] lg:left-[45%] left-[22%]">
          <h3 className="lg:text-6xl text-4xl lg:pb-9 pb-2 text-[#aa8232] font-semibold text-center">
            Projects
          </h3>
          <p className="lg:text-xl text-lg font-semibold  text-center">
            <span className="text-[#4b5358] mr-3">
              <Link to="/">HOME</Link>
            </span>
            <span className="text-[#4b5358] text-3xl"> &#62; </span>
            <span className="text-[#aa8232] ml-3">PROJECTS</span>
          </p>
        </div>
      </div>
      <div className="lg:p-32 p-6 lg:grid grid-cols-3 gap-10 bg-gray-100">
        {ProjectData?.map((item) => {
          return (
            <div className="shadow-2xl lg:mt-0 mt-6" key={item.id}>
              <div className="bg-white">
                <img
                  src={item.image}
                  className="h-[40vh] w-full object-cover"
                />
                <div>
                  <h2 className="text-[#b68f40] text-center text-3xl font-bold p-5">
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
