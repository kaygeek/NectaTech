import React from "react";
import styled from "styled-components";
import 'antd/dist/antd.css';
import HexagonGallery from "./HexagonGallery.jsx";



const AboutBody = styled.div`
 justify-content: flex-start;
 align-items: center;
 width: 100%;
 background: #E5E5E5;
`

const AboutContainer = styled.div`
  width: 74%;
  padding-top: 7rem;
  margin-top: 0rem;
  margin-left: 13rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  @media  screen and (max-width:1024px){
    max-width: 80%;
    margin-left: 8rem;
  }
  @media  screen and (max-width:425px){
    margin-left: 5rem;
  }
  @media  screen and (max-width:375px){
    margin-left: 4rem;
  }
  @media  screen and (max-width:320px){
    margin-left: 3rem;
  }
  h1 {
    margin: 14px 0;
    font-weight: bold;
    margin-top: -2rem;
  }
 

  & p {
    width: 96%;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 158%;
    display: flex;
    align-items: center;
    color: #333333;
    margin-bottom: 2rem;
    margin-top:2rem;
    padding-bottom: 5px;
    @media  screen and (max-width:768px){
      width: 90%;
    }
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

      </AboutContainer>
      <HexagonGallery />
  </AboutBody>
  );
}

export default About;
