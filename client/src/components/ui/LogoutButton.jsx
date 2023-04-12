import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const LogoutButton = () => {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const logout = async () => {
    await axios.get("/api/user/logout", { withCredentials: true });
    setCurrentUser(null);
    navigate("/");
  };
  return (
    <button
      className='py-2 px-6 border-2 border-red-600 rounded-full'
      onClick={() => logout()}>
      Logout
    </button>
  );
};

export default LogoutButton;
