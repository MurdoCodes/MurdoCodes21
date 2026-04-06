import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/** Logo, Site Name Navigation*/}
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
