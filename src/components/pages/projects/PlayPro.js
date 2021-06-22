import React from "react";
import Projects from "./Projects";
import "./Projects.css";
import flat from "./projects_images/playpro_imgs/flat.svg";
import image12 from "./projects_images/playpro_imgs/image12.svg";
import { Button } from "antd";
import Group73 from "./projects_images/scrumpro_img/Group73.svg";
import playerprofile2 from "./projects_images/playpro_imgs/playerprofile2.svg";
import ProjectsBottomContent from "./ProjectsBottomContent";
import styled from "styled-components";


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
  margin-left: 28rem;
  margin-right: 13rem;
  margin-bottom: 4rem;

`
const BtnViewSite = styled(Button)`
  width: 300px;
  margin-bottom: 2rem;
  padding: 5px 16px;
  background: #3ECC80;
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




function PlayPro() {
  return (
    <Frame>
    <Projects />
      <TopVector src={Group73} alt="vector" />
    <ContentContainer>
      <LogoTitle>
        <Logo src={flat} alt="Playpro  heading logo" />
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
      <Image1 className="img1" src={image12} alt="Vector 16 " />
      <Image2 className="img2" src={playerprofile2} alt="image 16 " />
      </ImageContainer>
      <BtnViewSite  href="https://www.necta.tech/PlayPro" className="scrumpro-btnViewSite" type="primary" size="large" block >
        View Site
      </BtnViewSite>
    </ContentContainer>
    <ProjectsBottomContent />
    </Frame>
  );
}

export default PlayPro;






