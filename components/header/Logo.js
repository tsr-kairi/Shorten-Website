import React from "react";
import Image from "next/image";
import LogoImg from "../../public/images/logo.svg";

export default function Logo() {
  return (
    <div className="header-logo">
      <Image className="logo-img" src={LogoImg} alt="logo image" />
    </div>
  );
}
