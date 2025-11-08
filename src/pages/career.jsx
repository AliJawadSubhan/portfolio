import React from "react";

const Career = () => {
  return (
    <div className="flex flex-row p-8 h-screen justify-between">
      <div className="flex items-center relative">
        <h1 className="text-white text-4xl font-bold pr-4">#Career</h1>
        <div className="h-[1px] bg-[#C778DD] w-[444px] absolute left-full top-1/2 transform -translate-y-1/2"></div>
      </div>
      <img src="src/assets/Github.svg" alt="" className="h-[190px]" />
    </div>
  );
};

export default Career;
