import React from "react";
import styled from "styled-components";
import 'antd/dist/antd.css';
import HexagonGallery from "./HexagonGallery.jsx";



const AboutBody = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 width: 100%;
 background: #E5E5E5;
`

const AboutContainer = styled.div`
  width: 73%;

  h1 {
    margin: 30px 0;
  }

  & p {
    height: 116px;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 158%;
    display: flex;
    align-items: center;
    color: #333333;
    margin: 0px;
    padding-bottom: 5px;

  }
`
function About() {

  return (
    <AboutBody className="about-body">
      <AboutContainer className="container">
      <h1> Meet the Team </h1>
      <p>
        In short, it’s our team. A young and driven team, which sets very high
        standards, such that we have the confidence to rival any in the
        industry. We have built enough platforms in the last several years,
        independtly and as a team, to know how best to build tech that will
        scale and perform in any market!
      </p>
      <p>
        We’re proudly South African and would love to partner with your business
        to give you peace of mind and more importantly increase your revenue!
      </p>

      <HexagonGallery />
    
      </AboutContainer>
  </AboutBody>
  );
}

export default About;
