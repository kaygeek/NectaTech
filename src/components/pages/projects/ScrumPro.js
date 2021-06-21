import React from "react";
// import "./Projects.css";
import styled from "styled-components";
import Projects from "./Projects";
import ProjectsBottomContent from "./ProjectsBottomContent";
import { Button } from "antd";
import player from "./projects_images/scrumpro_img/player.svg";
import image15 from "./projects_images/scrumpro_img/image15.svg";
import image16 from "./projects_images/scrumpro_img/image16.svg";
import Group73 from "./projects_images/scrumpro_img/Group73.svg";
import Group63 from "./projects_images/scrumpro_img/Group63.svg";


const Frame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`

const TopVector = styled.img`
  transform: translateY(-66%) rotate(180deg);
  z-index: 10;
`
const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    width: 70%;
    height: 116px;
    font-weight: normal;
    font-size: 19px;
    line-height: 158%;
    padding-bottom: 5px;
  }
`

const LogoTitle = styled.div`
  width: 70%;
  display: flex;
`

const Logo = styled.img`
  width: 270px;
  height: 80px;
  padding-bottom: 2rem;

`

const ImageContainer = styled.div`
  width: 70%;
  display: flex;
  margin-top: 10rem;
  margin-left: 13rem;
  margin-right: 13rem;
  margin-bottom: 4rem;

`
const BtnViewSite = styled(Button)`
  width: 300px;
  margin-bottom: 2rem;
  padding: 5px 16px;
  background: #241637;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  border: none;
  z-index: 10;
`

const Image1 = styled.img`
  position: relative;
  width: 27%;
  height: 30%;

`
const Image2 = styled.img`
  position: relative;
  width: 48%;
  height: 48%;

`
 const Image3 = styled.img`
  position: relative;
  width: 27%;
  height: 38%;

 `

function ScrumPro() {
  return (
    <Frame>
      <Projects />
        <TopVector src={Group73} alt="vector" />
      <ContentContainer>
        <LogoTitle>
          <Logo src={Group63} alt="ScrumPro heading logo" />
        </LogoTitle>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec non massa
          orci enim. Nec amet mollis eget mauris praesent neque, augue ut.
          Commodo, leo, sollicitudin velit amet. Ac et tempor lectus gravida
          senectus enim habitasse quis enim. Vitae integer ullamcorper massa
          ipsum. Amet, feugiat vitae vitae at sed viverra tempus. Odio habitant
          nisi congue orci purus facilisis porttitor.
        </p>  
        <ImageContainer>
          <Image1 className="img1" src={player} alt="Vector 16 " />
          <Image2 className="img2" src={image16} alt="image 16 " />
          <Image3 className="img3" src={image15} alt="image 15 " />
        </ImageContainer>
        <BtnViewSite  href="https://scrumpro.co.za/" className="scrumpro-btnViewSite" type="primary" size="large" block >
          View Site
        </BtnViewSite>
      </ContentContainer>
      <ProjectsBottomContent />
    </Frame>
  );
}

export default ScrumPro;
