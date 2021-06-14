import React from "react";
import 'antd/dist/antd.css';
import "./About.css";
import HexagonGallery from "./HexagonGallery.jsx";


function About() {

  return (
    <div className="about-body">
      <div className="container">
      <h1 className="Projects">  Meet the Team  </h1>
      <p className="about-description1">
        In short, it’s our team. A young and driven team, which sets very high
        standards, such that we have the confidence to rival any in the
        industry. We have built enough platforms in the last several years,
        independtly and as a team, to know how best to build tech that will
        scale and perform in any market!
      </p>
      <p className="about-description2">
        We’re proudly South African and would love to partner with your business
        to give you peace of mind and more importantly increase your revenue!
      </p>

      <HexagonGallery />
    
      </div>
  </div>
  );
}

export default About;
