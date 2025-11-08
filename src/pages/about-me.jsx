import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-row justify-between p-16 h-screen bg-[#282C33] relative">
      {/* Text Section */}
      <div className="max-w-2xl">
        <p className="text-[32px] text-white leading-snug">
          Ali Jawad is a{" "}
          <span className="text-white font-semibold">Mid-Level</span>{" "}
          <span className="text-[#C778DD] font-semibold">
            Mobile Application Engineer
          </span>{" "}
          and an{" "}
          <span className="text-[#C778DD] font-semibold">
            aspiring full-stack developer
          </span>
          .
        </p>

        <div className="mt-6 text-[#ABB2BF] text-lg leading-relaxed">
          <p>
            Professionally, he builds high-performance mobile apps using{" "}
            <span className="text-white font-medium">Flutter</span> and{" "}
            <span className="text-white font-medium">Dart</span>, delivering
            seamless cross-platform experiences.
          </p>
          {/* <p className="mt-3">
            Beyond mobile, he has contributed to{" "}
            <span className="text-white font-medium">Node.js</span> projects,
            working with both{" "}
            <span className="text-white font-medium">TypeScript</span> and{" "}
            <span className="text-white font-medium">JavaScript</span> to build
            APIs and backend services.
          </p> */}
        </div>

        <div className="gap-2 mt-8 flex">
          <button className="border-2 border-[#C778DD] text-[#C778DD] px-6 py-3 rounded-md font-medium hover:bg-[#C778DD] hover:text-white transition-all duration-300 ease-in-out">
            Know about my career
          </button>
          <button className="border-2 border-[#ABB2BF] text-white bg-[#ABB2BF] px-6 py-3 rounded-md font-medium hover:bg-transparent hover:text-[#ABB2BF] transition-all duration-300 ease-in-out">
            Download my resume
          </button>
        </div>
      </div>

      <div>
        <img
          src="src/assets/Github.svg"
          alt="Ali Jawad"
          className="h-[220px] opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
  );
};

export default AboutMe;
