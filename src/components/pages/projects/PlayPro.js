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
`

const TopVector = styled.div`
 position: relative;
 top: -120px; 
 transform: rotate(180deg);

`

const Logo = styled.img`
  position: relative;
  top: -64px;
  margin-left: 14rem;
  width: 300px;
 
`
const ContentContainer = styled.div`
width: 100%;

p{
  position: relative;
  margin-top: -1rem;
  margin-left: 14rem;
  margin-right: 5rem;
  width: 70%;
  height: 116px;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 158%;
  display: flex;
  align-items: center;
  padding-bottom: 5px;
}

`


const ImageContainer = styled.div`
  position: relative;
  width: 70%;
  top: -3rem;
  display: flex;
  margin-top: 10rem;
  margin-left: 15rem;
  margin-right: 13rem;
  margin-bottom: 4rem;

`

const Image1 = styled.img`
 width: 100%;
`

const Image2 = styled.img`
width: 75%;

`



const BtnViewSite = styled(Button)`
  position: relative;
  margin-left:35rem;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  padding: 5px 16px;
  background: #3ECC80;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  border: none;

`

function PlayPro() {
  return (
    <Frame>
      <Projects />
      <TopVector>
        <img src={Group73} alt="vector" />
      </TopVector>
      <ContentContainer>
      <Logo src={flat} alt="ScrumPro heading logo" />
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
