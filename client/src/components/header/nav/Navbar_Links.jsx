import React, { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

// component
import Navbar_Links_Link from "./Navbar_Links_Link";

const Navbar_Links = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className='flex gap-3'>
      <Navbar_Links_Link url='/phoenix_vision' title='Phoenix Vision' />
      {currentUser ? (
        <>
          <Navbar_Links_Link url='/phoenix_talk' title='Phoenix Talk' />
          <Navbar_Links_Link url='/account' title='Account' />
        </>
      ) : (
        <>
          <Navbar_Links_Link url='/register' title='Sign Up' />
          <Navbar_Links_Link url='/login' title='Login' />
        </>
      )}
    </div>
  );
};

export default Navbar_Links;
