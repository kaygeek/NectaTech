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
`

 const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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