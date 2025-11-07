import React from "react";

const Career = () => {
  return (
    <div className="flex flex-row p-8 h-screen bg-red-300 ">
      <div className="px-8 py-4 text-[32px]">
        <p>
          Ali Jawad is a{" "}
          <span className="text-[#C778DD] font-bold">
            Mobile Application Engineer
          </span>{" "}
          and{" "}
          <span className="text-[#C778DD] font-bold">
            aspiring full-stack developer
          </span>
          .
        </p>
      </div>
      <img src="src/assets/Github.svg" alt="" className="h-[190px]" />
    </div>
  );
};

export default Career;
