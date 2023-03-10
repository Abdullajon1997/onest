import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { children } from "react";
// import Home from "../Home/Home";
// import Second from "../Second/Second";

function Layout({ children }) {
  return (
    <>
      <Header />
      {/* Birinchi pages */}
      {/* <Home/> */}
        {children}


      {/* ikkinchi pages */}
      {/* <Second/> */}
      <Footer />
    </>
  );
}

export default Layout;
