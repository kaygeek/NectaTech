import React from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import "./homeCarouselStyle.css";
import styled from 'styled-components';
import first_slide from "./home_imgs/first_slide.svg";
import second_slide from "./home_imgs/second_slide.svg";
import third_slide from "./home_imgs/third_slide.svg";


const CarouselStyle = styled(Carousel)` 
  position: relative;
  width: 100%;
  height: 350px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`



function HomeCarousel() {
  return (
    <div>
      <CarouselStyle autoplay>
        <div className="carousel-container">
          <p className="description1">
            <b>NectaTech</b> builds robust and scalable software platforms,
               geared towards putting the power in the user’s hands.
          </p>
          <img className="slide-img1" src={first_slide} alt="laptop" />
        </div>
        <div className="carousel-container">

          <img className="slide-img2" src={second_slide} alt="laptop" />
          <p className="description2">
           We have you covered, from <b>Design</b> through <b>Development</b> and <b>beyond</b>!
          </p>
        </div>

        <div className="carousel-container">
          <p className="description3">
              Our Team keeps working to bring the most sustainable and fresh
              tech to the table to make sure our platforms are sustainable and
              adaptable.
          </p>
          <img className="slide-img3" src={third_slide} alt="laptop" />
        </div>

      </CarouselStyle>


      {/* <Carousel autoplay>
        <div className="carousel-body">
          <div className="carousel-container1 ">
            <div className="carousal-description1">
              <p>
                <b>NectaTech</b> builds robust and scalable software platforms,
              geared towards putting the power in the user’s hands.
            </p>
            </div>
            <img src={first_slide} alt="laptop" />
          </div>
        </div>


        <div className="carousel-body">
          <div className="carousel-container2 ">
            <img src={second_slide} alt="laptop" />
            <div className="carousal-description2">
              <p>
                We have you covered, from <b>Design</b> through <b>Development</b> and <b>beyond</b>!
            </p>
            </div>
          </div>
        </div>


        <div className="carousel-body">
          <div className="carousel-container3 ">
            <div className="carousal-description3">
              <p>
                Our Team keeps working to bring the most sustainable and fresh
                tech to the table to make sure our platforms are sustainable and
                adaptable.
            </p>
            </div>
            <img src={third_slide} alt="laptop" />
          </div>
        </div>
      </Carousel> */}
    </div>
  );
}

export default HomeCarousel;
