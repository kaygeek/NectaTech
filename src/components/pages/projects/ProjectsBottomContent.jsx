import React from "react";
import "./Projects.css";
import Group73 from "./projects_images/scrumpro_img/Group73.svg";
import BtnDiscussYourProjectWithUs from "./BtnDiscussYourProjectWithUs.jsx";
import BtnViewOurProjects from "./BtnViewOurProjects";
import styled from "styled-components";


const Fram = styled.div`
position: relative;
z-index: -2;
background: #E5E5E5;
height: 320px;
width: 100%;
margin-top: 8rem;
padding-top:4rem;

`

 const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  top: -33rem;
  opacity: 10;
 `

 const BottomVector = styled.img`
  position: relative;
  top: -106px;
 `

function ProjectsBottomContent() {
  return (
    <Fram>
      <div className="vector-structure">
        <BottomVector src={Group73}  alt="vector" />
      </div>



      <BtnContainer className="flex-container">
        <BtnDiscussYourProjectWithUs />
        <BtnViewOurProjects />
      </BtnContainer>
    </Fram>
  );

}

export default ProjectsBottomContent;