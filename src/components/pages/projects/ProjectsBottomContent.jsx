import React from "react";
import "./Projects.css";
import Group73 from "./projects_images/scrumpro_img/Group73.svg";
import BtnDiscussYourProjectWithUs from "./BtnDiscussYourProjectWithUs"
import BtnViewOurProjects from "./BtnViewOurProjects";
import styled from "styled-components";



const Fram = styled.div`
  background: #E5E5E5;
  height: 320px;
  width: 100%;
  margin-top: 100px;
  @media  screen and (max-width:543px){
    height: 260px;
  }
`

 const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width:648px){
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-left:1rem;
  }
 `

 const BottomVector = styled.img`
  transform: translateY(-30%);
 `

function ProjectsBottomContent() {
  return (
    <Fram>
      <div className="vector-structure">
        <BottomVector src={Group73}  alt="vector" />
      </div>
      <BtnContainer>
        <BtnDiscussYourProjectWithUs />
        <BtnViewOurProjects />
      </BtnContainer>
    </Fram>
  );

}

export default ProjectsBottomContent;