import React from "react";
import Projects from "./Projects";
import "./Projects.css";
import NectaTrack_Logo from "./projects_images/nectatrack_imgs/NectaTrack_Logo.svg";
import image14 from "./projects_images/nectatrack_imgs/image14.svg";
import smartmockups_kaqomkl8 from "./projects_images/nectatrack_imgs/smartmockups_kaqomkl8.svg";
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
    margin-bottom: -2em;
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
 
img{
  width: 50%;
}
 
@media  screen and (max-width:425px){
  width: 76%;
  margin-top: 22rem;
}
@media  screen and (max-width:320px){
  margin-top: 14rem;
}
@media  screen and (max-width:375px){
  margin-top: 24rem;
}
@media screen and (max-width:320px){
  margin-top: 30rem;
}
`
const BtnViewSite = styled(Button)`
  width: 300px;
  margin-bottom: 2rem;
  padding: 5px 16px;
  background: #0F4C81;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  border: none;
  z-index: 10;
`




function NectaTrack() {
  return (
    <Frame>
      <Projects />
        <TopVector src={Group73} alt="vector" />
      <ContentContainer id="nectatrack">
        <LogoTitle>
          <Logo src={NectaTrack_Logo} alt="ScrumPro heading logo" />
        </LogoTitle>
        <p>Transparent | Accountable | Efficient</p>
        <p>Ensure complete visibility and accountability in your business with NectaTrack.
           Our advanced assign-and-track tech and easy to use QR system will maintain a line 
           of sight for your business on all previous and current interactions; from staff and customers, to assets and stock.
        </p>  
        <ImageContainer>
        <img src={image14} alt="Vector 16 " />
        <img src={smartmockups_kaqomkl8} alt="image 16 " />
        </ImageContainer>
        <BtnViewSite  href="https://www.necta.tech/NectaTrack" target="_blank" rel="noopener noreferrer" className="scrumpro-btnViewSite" type="primary" size="large" block >
          View Site
        </BtnViewSite>
      </ContentContainer>
      <ProjectsBottomContent />
    </Frame>
  );
}

export default NectaTrack;

