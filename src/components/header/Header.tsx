import "./Header.scss";
import React, { useState } from "react";
import { NavLink } from "react-router";
import { RoutesUrls } from "../../utils/routes-url";
import { IconMenu2 } from "@tabler/icons-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen)
  return (
    <header className="header">
     
      <nav>
        <NavLink to={RoutesUrls.BASE_URL} className="logo">
          A
        </NavLink>
        <NavLink to={RoutesUrls.BASE_URL} aria-label="home" className="link"  >
          Home
        </NavLink>
        <NavLink
          to={RoutesUrls.ABOUT_URL}
          aria-label="about us"
          className="link"
        >
          About
        </NavLink>
        <button className = 'menu-btn' onClick={() => setIsOpen(!isOpen)}>
          <IconMenu2 />
        </button>
        
      </nav>
      {
        isOpen && <div className="show">
        <NavLink 
        to={RoutesUrls.BASE_URL} 
        aria-label="home" 
        className="link"
        onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to={RoutesUrls.ABOUT_URL}
          aria-label="about us"
          className="link"
          onClick={() => setIsOpen(false)}
        >
          About
        </NavLink>
      </div>
      }
    </header>
  );
};

export default Header;
