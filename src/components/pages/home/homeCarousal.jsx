import React from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import "./homeCarouselStyle.css";
import styled from 'styled-components';
import first_slide from "./home_imgs/first_slide.svg";
import second_slide from "./home_imgs/second_slide.svg";
import third_slide from "./home_imgs/third_slide.svg";

const CarouselStyle = styled(Carousel)` 
  /* position: relative; */
  max-width: 100vw;
  height: 350px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Frame = styled.div`
  display: flex !important;
  width: 100% !important;
  justify-content: center;
  align-items: center;
  padding: 40px;
  @media only screen and (max-width: 768px) {
    padding: 20px 10px;
  }
  img {
    width: 50%;
    max-width: 400px;
  }
  p {
    width: 50%;
    max-width: 500px;
    font-size: 25px;
    margin: 0;
  }
`

function HomeCarousel() {
  return (
    <CarouselStyle autoplay>

    <Frame>
      <p >
        <b>NectaTech</b> builds robust and scalable software platforms,
           geared towards putting the power in the user’s hands.
      </p>
      <img src={first_slide} alt="laptop" />

    </Frame>

    <Frame>

      <img src={second_slide} style={{maxWidth: '300px'}} alt="laptop" />
      <p style={{marginLeft: '15px'}}>
       We have you covered, from <b>Design</b> through <b>Development</b> and <b>beyond</b>!
      </p>
    </Frame>

    <Frame>
      <p>
          Our Team keeps working to bring the most sustainable and fresh
          tech to the table to make sure our platforms are sustainable and
          adaptable.
      </p>
      <img src={third_slide} alt="laptop" />
    </Frame>
    </CarouselStyle>
  );
}

export default HomeCarousel;
