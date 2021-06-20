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



const Frame = styled.div`
 width: 100%;

`

const TopVector = styled.div`
 position: relative;
 top: -120px; 
 transform: rotate(180deg);

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

const Logo = styled.img`
position: relative;
top: -30px;
margin-left: 14rem;
width: 300px;
padding-bottom: 2rem;

`

const ImageContainer = styled.div`
  position: relative;
  width: 70%;
  top: -3rem;
  display: flex;
  margin-top: 10rem;
  margin-left: 24rem;
  margin-right: 13rem;
  margin-bottom: 4rem;

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
  background: #0E2B43;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  border: none;

`

const Image1 = styled.img`
  position: relative;
  width: 27%;
  height: 320px;
  

`
const Image2 = styled.img`
  position: relative;
  width: 55%;
  

`


function Necta() {
  return (

    <Frame>
      <Projects />
      <TopVector>
        <img src={Group73} alt="vector" />
      </TopVector>
      <ContentContainer>
      <Logo src={Group64} alt="ScrumPro heading logo" />
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
      <BtnViewSite  href="https://scrumpro.co.za/" className="scrumpro-btnViewSite" type="primary" size="large" block >
        View Site
      </BtnViewSite>
     </ContentContainer>
      <ProjectsBottomContent />
    </Frame>




      // <Button
      //   href="https://necta.app/"
      //   className="necta-btnViewSite"
      //   type="primary"
      //   size="large"
      //   style={{
      //     position: "relative",
      //     top: "-18rem",
      //     left: "550px",
      //     width: "350px",
      //     display: "flex",
      //     flexDirection: "column",
      //     alignItems: "center",
      //     // marginBottom:"2rem",
      //     padding: " 5px 16px",
      //     background: "#",
      //     boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      //     borderRadius: "2px",
      //     border: "none",
      //   }}
      //   block
      // >
      //   View Site
      // </Button>

      
  );
}

export default Necta;
