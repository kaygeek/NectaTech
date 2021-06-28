import React from "react";
import Projects from "./Projects";
import "./Projects.css";
import { Button } from "antd";
import ProjectsBottomContent from "./ProjectsBottomContent";
import Group66 from "./projects_images/bloomWed_imgs/Group66.svg";
import Group1 from "./projects_images/bloomWed_imgs/Group1.svg";
import smartmockups_knh8mjgh1 from "./projects_images/bloomWed_imgs/smartmockups_knh8mjgh1.svg";
import Group73 from "./projects_images/scrumpro_img/Group73.svg";
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
    /* height: 116px; */
    font-weight: normal;
    font-size: 19px;
    line-height: 158%;
    padding-bottom: 5px;
    margin-bottom: 1em;
  }
`

const LogoTitle = styled.div`
margin-bottom: 4rem;
  width: 90%;
  display: flex;
  padding-bottom: 2px;
  
`

const Logo = styled.img`
  width: 300px;
  margin-left: 8rem;
  padding-bottom: 1rem;
  margin-bottom: -11rem;
  @media  screen and (max-width:2010px){
    margin-left: 6rem;
  }
 @media  screen and (max-width:425px){
  margin-left: 2rem;
 }
`

const ImageContainer = styled.div`
  width: 65%;
  display: flex;
  margin-top: 10rem;
  margin-left: 12rem;
  margin-right: 13rem;
  margin-bottom: 4rem;
  @media  screen and (max-width:1024px){
    margin-left: 9rem;
  }
  @media  screen and (max-width:784px){
    margin-left: 10rem;
    width: 65%;
  }
  @media  screen and (max-width:768px){
  margin-left: 7rem;
}
  @media  screen and (max-width:425px){
    margin-left: 12rem;
    width: 70%;
    margin-top: 5rem;
  }
  @media  screen and (max-width:320px){
    width: 81%;
    margin-top: 3rem;
}

`

const Image1 = styled.img`
  width: 58%;
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
  background: #F8BBD0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  border: none;
  z-index: 10;
`



function BloomWeddings() {
  return (
    <Frame>
      <Projects />
        <TopVector src={Group73} alt="vector" />
      <ContentContainer id="bloomweddings">
        <LogoTitle>
          <Logo src={Group66} alt=" heading logo" />
        </LogoTitle>
        <p>
        The Bloom Proposal:
       </p>  
       <p> Dream. Create. Inspire. Bloom invites you to build and celebrate your magical day with flawless wedding planning that spares no detail. We’ll show you all the ropes to help you tie the knot. And the best news is that Bloom is free!
        </p>
        <ImageContainer>
        <Image1 className="img1" src={Group1} alt="Vector 16 " />
        <Image2 className="img2" src={smartmockups_knh8mjgh1} alt="image 16 " />
        </ImageContainer>
        <BtnViewSite   href="https://bloomweddings.co.za/login" target="_blank" rel="noopener noreferrer" className="scrumpro-btnViewSite" type="primary" size="large" block >
          View Site
        </BtnViewSite>
      </ContentContainer>
      <ProjectsBottomContent />
    </Frame>
       
  );
}

export default BloomWeddings;

