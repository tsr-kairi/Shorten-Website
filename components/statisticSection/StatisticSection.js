import React from "react";
import BrandImg from "../../public/images/icon-brand-recognition.svg";
import DetailedImg from "../../public/images/icon-detailed-records.svg";
import CustomizableImg from "../../public/images/icon-fully-customizable.svg";

import Image from "next/image";
export default function StatisticSection() {
  return (
    <div className="container">
      <div className="statistic-section">
        <div className="statistic-text">
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="statistic-card-bg">
          <div className="statistic-card-wrap">
            <div className="statistic-card-wrapper">
              <div className="statistic-card statistic-card-mt-1">
                <h1>Brand recognition</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam beatae nam saepe distinctio illo ipsum culpa officia
                  adipisci numquam corrupti.
                </p>
              </div>
              <div className="statistic-img">
                <Image className="img" src={BrandImg} alt="brand image" />
              </div>
            </div>
            <div className="statistic-card-wrapper">
              <div className="statistic-card statistic-card-mt-2">
                <h1>Detailed Records</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam beatae nam saepe distinctio illo ipsum culpa officia
                  adipisci numquam corrupti.
                </p>
              </div>
              <div className="statistic-img statistic-img-mt-2">
                <Image className="img" src={DetailedImg} alt="detailed image" />
              </div>
            </div>
            <div className="statistic-card-wrapper">
              <div className="statistic-card statistic-card-mt-3">
                <h1>Fully Customizable</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam beatae nam saepe distinctio illo ipsum culpa officia
                  adipisci numquam corrupti.
                </p>
              </div>
              <div className="statistic-img statistic-img-mt-3">
                <Image
                  className="img"
                  src={CustomizableImg}
                  alt="customizable image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
