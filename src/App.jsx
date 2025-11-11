import React from "react";
import Navbar from "./global_components/navbar";
import AboutMe from "./pages/about-me";
import Career from "./pages/career";
import SmoothScrollSection from "./global_components/scroll_animator"; // import the scroll wrapper
import Project from "./pages/projects";

const App = () => {
  return (
    <div className="flex">
      {/* Left fixed social links */}
      <div className="fixed flex flex-col items-center left-5">
        <div className="h-[290px] w-[1px] bg-[#ABB2BF]"></div>
        <a
          href="https://github.com/AliJawadSubhan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="src/assets/Github.svg"
            alt="GitHub"
            className="p-1 hover:opacity-80 transition"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/alijawadsubhan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="src/assets/Linkedin.svg"
            alt="LinkedIn"
            className="p-1 hover:opacity-80 transition"
          />
        </a>
        <a
          href="https://stackoverflow.com/users/20531439/ali-jawad"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="src/assets/stackoverflow.svg"
            alt="Stack Overflow"
            className="p-1 hover:opacity-80 transition ease-in"
          />
        </a>
      </div>

      {/* Right side: main content */}
      <div className="flex-1 ml-[80px]">
        {/* Wrap each section in SmoothScrollSection */}
        <SmoothScrollSection>
          <Navbar />
        </SmoothScrollSection>

        <SmoothScrollSection>
          <AboutMe />
        </SmoothScrollSection>

        <SmoothScrollSection>
          <Career />
        </SmoothScrollSection>

        <SmoothScrollSection>
          <Project />
        </SmoothScrollSection>
      </div>
    </div>
  );
};

export default App;
