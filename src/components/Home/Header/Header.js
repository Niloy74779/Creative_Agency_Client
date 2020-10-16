import React from "react";
import Banner from "../Banner/Banner";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <NavbarMenu />
      <Banner />
    </div>
  );
};

export default Header;
