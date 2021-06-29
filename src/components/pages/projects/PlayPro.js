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
  overflow: hidden;

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
    font-weight: normal;
    font-size: 19px;
    line-height: 158%;
    padding-bottom: 5px;
    /* s */
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
  @media screen and (min-width:320px){
    width: 190px;
  }

`

const ImageContainer = styled.div`
  width: 70%;
  display: flex;
  margin-top: 7rem;
  margin-left: 30rem;
  margin-right: 13rem;
  margin-bottom: 4rem;
  @media  screen and (max-width:768px){
    margin-left: 23rem;
  }
  @media  screen and (max-width:425px){
    width: 95%;
    margin-top: 4rem;
    margin-left: 20rem;
  }
  
  @media screen and (max-width: 320px){
    width: 104%;
    margin-top: 4rem;
    margin-left: 18rem;
  }

`

const Image1 = styled.img`
  width: 27%;
  height: 30%;
`
const Image2 = styled.img`
  width: 48%;
  height: 48%;

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
  @media  screen and (max-width:320px){
    width: 221px;
  }
  @media  screen and (max-width:425px){
    width: 255px;
  }
`

function PlayPro() {
  return (
    <Frame>
    <Projects />
      <TopVector src={Group73} alt="vector" />
    <ContentContainer id="playpro">
      <LogoTitle>
        <Logo src={flat} alt="Playpro  heading logo" />
      </LogoTitle>
      <p>Where talent meets opportunity!</p>
      <p>
          PlayPro is a software platform built for Sports Administration at schools, clubs, academies, and universities.
           It allows Sports Administrators to create profiles of all Players and Coaches within their Organisation, and then link those Players and Coaches to a Sport and Team. Documentation can be added to their profiles, along with images and videos.
      </p>  
      <ImageContainer>
      <Image1 className="img1" src={image12} alt="Vector 16 " />
      <Image2 className="img2" src={playerprofile2} alt="image 16 " />
      </ImageContainer>
      <BtnViewSite  href="https://www.necta.tech/PlayPro" target="_blank" rel="noopener noreferrer" className="scrumpro-btnViewSite" type="primary" size="large" block >
        View Site
      </BtnViewSite>
    </ContentContainer>
    <ProjectsBottomContent />
    </Frame>
  );
}

export default PlayPro;






