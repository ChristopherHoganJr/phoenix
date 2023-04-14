import React, { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

// component
import Navbar_Links_Link from "./Navbar_Links_Link";
import LogoutButton from "../../ui/LogoutButton";

const Navbar_Links = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className='flex items-center gap-3'>
      {currentUser ? (
        <>
          <Navbar_Links_Link url='/phoenix' title='Phoenix Talk' />
          <LogoutButton />
        </>
      ) : (
        <>
          <Navbar_Links_Link url='/phoenix_vision' title='Phoenix Vision' />
          <Navbar_Links_Link url='/register' title='Sign Up' />
          <Navbar_Links_Link url='/login' title='Login' />
        </>
      )}
    </div>
  );
};

export default Navbar_Links;
