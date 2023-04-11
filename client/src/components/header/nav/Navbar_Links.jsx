import React from "react";

// component
import Navbar_Links_Link from "./Navbar_Links_Link";

const Navbar_Links = () => {
  return (
    <div className='flex gap-3'>
      <Navbar_Links_Link url='/phoenix_vision' title='Phoenix Vision' />
      <Navbar_Links_Link url='/register' title='Sign Up' />
      <Navbar_Links_Link url='/login' title='Login' />
    </div>
  );
};

export default Navbar_Links;
