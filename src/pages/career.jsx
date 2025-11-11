import React from "react";
import CareerTimeline from "../global_components/career_timeline";
import SmoothScrollSection from "../global_components/scroll_animator"; // import the scroll wrapper

const Career = () => {
  return (
    <div className="flex flex-row justify-between h-screen bg-[#282C33] px-16 py-2">
      <div className="flex flex-col">
        <div className="flex relative mt-12">
          <h1 className="text-white text-4xl font-bold pr-4">#Career</h1>
          <div className="h-[2px] bg-[#C778DD] w-[444px] mt-5"></div>
        </div>
        <div className="pt-8">
          <SmoothScrollSection>
            <CareerTimeline />
          </SmoothScrollSection>
        </div>
      </div>
    </div>
  );
};

export default Career;
