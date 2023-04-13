import React from "react";
import { Outlet } from "react-router-dom";

// components
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className='max-w-7xl mx-auto'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
