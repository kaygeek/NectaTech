import React from "react";
import Projects from "./Projects";
import "./Projects.css";
import Group64 from "./projects_images/necta_imgs/Group64.svg";
import necta1 from "./projects_images/necta_imgs/necta1.svg";
import Group73 from "./projects_images/scrumpro_img/Group73.svg";
import { Button } from "antd";
import ProjectsBottomContent from "./ProjectsBottomContent";
import styled from "styled-components";
import nectap from "./projects_images/necta_imgs/nectap.svg";


 import image65 from "../concact/contacts_imgs/image65.svg";
//  import image66 from "../concact/contacts_imgs/imgae66.svg";

import { Card } from 'antd';

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
  margin-left:-7rem;
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
  margin-left: 19rem;
  /* margin-right: 13rem; */
  margin-bottom: 4rem;

`
const BtnViewSite = styled(Button)`
  width: 300px;
  margin-bottom: 2rem;
  padding: 5px 16px;
  background: #0E2B43;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  border: none;
  z-index: 10;
`



const Image1 = styled.img`
  width: 27%;
  height: 320px;

`
const Image2 = styled.img`
  width: 55%;
`


function Necta() {
  return (

    <Frame>
      <Projects />
        <TopVector src={Group73} alt="vector" />
      <ContentContainer id="necta">
        <LogoTitle>
          <Logo src={Group64} alt="ScrumPro heading logo" />
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
        <Image1 className="img1" src={nectap} alt="Vector 16 " />
        <Image2 className="img2" src={necta1} alt="image 16 " />
        </ImageContainer>


        <BtnViewSite  href="https://scrumpro.co.za/" target="_blank" rel="noopener noreferrer" className="scrumpro-btnViewSite" type="primary" size="large" block >
          View Site
        </BtnViewSite>
      </ContentContainer>
      <ProjectsBottomContent />
    </Frame>

  );
}

export default Necta;


