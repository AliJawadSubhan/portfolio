import React from 'react'
// import tailwindcss from '@tailwindcss/vite'

const Navbar = () => {
    return (
      <nav className="flex justify-between items-center p-12">
        {/* Contact Me Live button */}
       <div className="flex items-center justify-between w-full px-8 py-4">
  {/* Left side — name */}
  <div className="text-5xl font-bold text-white">Ali Jawad</div>

  {/* Right side — nav links */}
  <div className="flex space-x-6 text-lg">
    <div className="text-[#C778DD]">
      #<a href="#home" className="text-white">Home</a>
    </div>

    <div className="text-[#C778DD]">
      #<a href="#about" className="text-[#ABB2BF] hover:text-white transition-all duration-200 ease-in">Work</a>
    </div>

    <div className="text-[#C778DD]">
      #<a href="#projects" className="text-[#ABB2BF] hover:text-white transition-all duration-200 ease-in">Projects</a>
    </div>

    {/* Contact with ping animation */}
    {/* Contact with ping animation */}
<div className="flex items-center text-[#C778DD]">
  #<a
    href="#contact"
    className="text-[#ABB2BF] hover:text-white transition-all duration-200 ease-in flex items-center gap-2"
  >
    Contact
    <div className="relative flex h-2.5 w-2.5">
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#C778DD] opacity-75 animate-ping"></span>
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C778DD]"></span>
    </div>
  </a>
</div>

  </div>
</div>

      </nav>
    );
  };
  
//   export default Navbar;
  
export default Navbar