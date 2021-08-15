import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
export default function NavbarFrom() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav className="navbar-from-wrap">
      <div className="navbar-from">
        <div className="navbar-button">
          <button className="login">Login</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </div>

      {/* Mobile open menu */}
      <div className="open-menu">
        <FaBars />
      </div>

      {/* Mobile nav */}
      <div className="hamburger">
        <div className="logo-menu">
          <Image
            src="/images/logo.svg"
            alt="Picture of the author"
            width={180}
            height={30}
          />
          {/*  Mobile close menu */}
          <FaTimes className="close-menu" />
        </div>
        <div className="hamburger-link-item">
          <div className="hamburger-link">Features</div>
          <div className="hamburger-link">pricing</div>
          <div className="hamburger-link">Resources</div>
          <div className="vr"></div>
          <div className="hamburger-button">
            <button className="login">Login</button>
            <button className="sign-up">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
