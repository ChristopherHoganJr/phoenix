import React from "react";

// components
import Navbar_Logo from "./Navbar_Logo";
import Navbar_Links from "./Navbar_Links";

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-blue-200'>
      <Navbar_Logo />
      <Navbar_Links />
    </nav>
  );
};

export default Navbar;
