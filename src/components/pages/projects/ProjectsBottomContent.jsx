import React from "react";
import ReactDom from 'react-dom';
import "./Projects.css";
import Group73 from "./projects_images/scrumpro_img/Group73.svg";


function ProjectsBottomContent() {
  return (
    <div className="section-3"
      style={{
        position: "relative",
        zIndex: "-2",
        background: "#E5E5E5",
        height: "320px"
      }}>
      <div className="vector-structure">
        <img
          className="bottom-vector"
          src={Group73}
          alt="vector"
        />
      </div>
    </div>
  );

}

export default ProjectsBottomContent;