import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Outlet, useNavigate } from "react-router-dom";

// components
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const LoggedInLayout = () => {
  const navigate = useNavigate();
  const { ready, currentUser } = useContext(UserContext);

  if (ready && !currentUser) navigate("/");
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LoggedInLayout;
