import React from "react";
// import tailwindcss from '@tailwindcss/vite'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-8 bg-transparent">
      {/* Contact Me Live button */}
      <div className="flex items-center justify-between w-full px-8 py-0">
        {/* Left side — name */}
        <div className="text-5xl font-bold text-white">Ali Jawad</div>

        {/* Right side — nav links */}
        <div className="flex space-x-6 text-lg">
          <div className="text-[#C778DD]">
            #
            <a href="#home" className="text-white">
              Home
            </a>
          </div>

          <div className="text-[#C778DD]">
            #
            <a
              href="#about"
              className="text-[#ABB2BF] hover:text-white transition-all duration-200 ease-in"
            >
              Work
            </a>
          </div>

          <div className="text-[#C778DD]">
            #
            <a
              href="#projects"
              className="text-[#ABB2BF] hover:text-white transition-all duration-200 ease-in"
            >
              Projects
            </a>
          </div>

          {/* Contact with ping animation */}
          {/* Contact with ping animation */}
          <div className="flex items-center text-[#C778DD]">
            #
            <a
              href="#contact"
              className="relative text-[#ABB2BF] hover:text-white transition-all duration-200 ease-in"
            >
              Contact
              <span className="absolute left-0 bottom-[-2px] h-[2px] bg-[#C778DD] animate-[underlineLoop_2s_ease-in-out_infinite]"></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

//   export default Navbar;

export default Navbar;
