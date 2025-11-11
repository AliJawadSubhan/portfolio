import React from "react";
import ProjectCard from "../global_components/project-card";

const Project = () => {
  return (
    <div className="flex flex-col justify-between h-screen bg-[#282C33] px-16 py-2">
      <div className="flex flex-col">
        <div className="flex relative mt-12">
          <h1 className="text-white text-4xl font-bold pr-4">#Projects</h1>
          <div className="h-[2px] bg-[#C778DD] w-[444px] mt-5"></div>
        </div>
        <div className="py-12">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Project;
