import React from "react";
import Image from "next/image";
import LogoImg from "../../public/images/logo.svg";
import FbIcon from "../../public/images/icon-facebook.svg";
import TtIcon from "../../public/images/icon-twitter.svg";
import PtIcon from "../../public/images/icon-pinterest.svg";
import IgIcon from "../../public/images/icon-instagram.svg";

export default function FooterSection() {
  return (
    <div className="footer-section">
      <div className="footer-section-wrapper">
        <div className="footer-logo">
          <Image className="logo-img" src={LogoImg} alt="logo image" />
        </div>
        <div className="footer-nav">
          <div className="footer-nav-item">
            <h1>Features</h1>
            <span>Link Shortening</span>
            <span>Branded Links</span>
            <span>Analysing Links</span>
          </div>

          <div className="footer-nav-item">
            <h1>Resources</h1>
            <span>Blog</span>
            <span>Developers</span>
            <span>Support</span>
          </div>

          <div className="footer-nav-item">
            <h1>Company</h1>
            <span>About</span>
            <span>carrier</span>
            <span>Contact</span>
          </div>
        </div>

        <div className="footer-social">
          <i class="footer-icon fab fa-facebook"></i>
          <i class="footer-icon fab fa-twitter"></i>
          <i class="footer-icon fab fa-pinterest"></i>
          <i class="footer-icon fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}
