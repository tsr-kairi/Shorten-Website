import React, { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import NavbarFrom from "./NavbarFrom";

function Index() {
  const [value, setValue] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setValue(true);
    } else {
      setValue(false);
    }
  };

  try {
    window.addEventListener("scroll", changeBackground);
  } catch (error) {
    console.log(error);
  }

  return (
    <section className="hero-section">
      <div className="container">
        <header className={value ? "header active-header" : "header"}>
          <Logo />
          <Navbar />
          <NavbarFrom />
        </header>
      </div>
    </section>
  );
}

export default Index;
