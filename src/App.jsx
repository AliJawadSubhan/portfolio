import React from "react";
import Navbar from "./global_components/navbar";
import AboutMe from "./pages/about-me";
import Career from "./pages/career";

const App = () => {
  return (
    <div className="flex">
      {/* Left vertical line */}
      <div className="flex flex-col items-center ml-5">
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
      <div className="flex-1">
        <Navbar />
        <AboutMe />
        <Career />
      </div>
    </div>
  );
};

export default App;
