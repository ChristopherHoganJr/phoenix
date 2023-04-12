import React from "react";

// components
import Navbar_Logo from "./Navbar_Logo";
import Navbar_Links from "./Navbar_Links";

const Navbar = () => {
  return (
    <nav className='flex justify-between max-w-7xl mx-auto px-2 h-20 items-center'>
      <Navbar_Logo />
      <Navbar_Links />
    </nav>
  );
};

export default Navbar;
