import React from "react";

export default function BoostSection() {
  return (
    <div className="boost-section">
      <div
        className="boost-section-bg"
        style={{
          backgroundImage: "url('/images/bg-boost-desktop.svg')",
        }}
      >
        <div className="boost-section-bg-text">
          <h1>Boost your links today</h1>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}
