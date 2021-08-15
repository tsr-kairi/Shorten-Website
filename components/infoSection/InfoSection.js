import Image from "next/image";
import React from "react";
import InfoImg from "../../public/images/bg-shorten-desktop.svg";

export default function InfoSection() {
  return (
    <div className="info-wrap">
      <div className="info-wrapper">
        <div className="info-left">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>

          <button>Get Started</button>
        </div>
        <div
          className="info-right"
          style={{
            backgroundImage: "url('/images/illustration-working.svg')",
          }}
        ></div>
      </div>

      <div className="info-from-wrap">
        <div className="info-from-bg">
          <Image className="img" src={InfoImg} alt="info from bg image" />
        </div>
        <div className="info-from">
          <input type="text" placeholder="Shorten a link here..." />
          <button>Shorten it!</button>
        </div>
      </div>
    </div>
  );
}
