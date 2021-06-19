import React from "react";
import "./Projects.css";
import img_1 from "./projects_images/img_1.svg";
import img_2 from "./projects_images/img_2.svg";
import img_3 from "./projects_images/img_3.svg";
import img_4 from "./projects_images/img_4.svg";
import img_5 from "./projects_images/img_5.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

// const ContentBody = styled.div`
//  flex-direction: column;
//  background: #e5e5e5;
//  width: 100%;

// `
// const ProjectsContainer = styled.div`
// h1{
//   position: relative;
//   margin-left: -4rem;
// }

`
// const ProjectsGallery = styled.div`
//   margin: auto;
//   margin-top: 50px;
//   max-width: 1010px;
//   display: grid;
//   grid-template-columns: repeat(10, 1fr);
//   grid-auto-rows: 200px;
//   grid-gap: 12px;
//   padding-bottom: 165px;
//   padding-top: 5rem;

//  .hex{
//   display: flex;
//   position: relative;
//   width: 156.55px;
//   height: 180.71px;
//   -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%,   0% 75%,  0% 25%);
//   clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
//   }
// `

function Projects() {
  return (
    <div className="content-body">
      <div className="projects-container">
        <h1> Our Projects </h1>
        <p>
          Have a look at some of our projects to see how NectaTech can help you
          take your business to the next level with a cultivated personal
          digital presence that will grow and change, as the times and tech do.
        </p>
      </div>
      <div className="projects-hex-gallery">
        <div className="hex">
          <Link to="/scrumpro" className="hex">
            <img src={img_1} alt="ScrumPro" />
          </Link>
        </div>

        <div className="hex">
          <Link to="playpro" className="hex">
            <img src={img_2} alt="PLAYPRO" />
          </Link>
        </div>

        <div className="hex">
          <Link to="/nectatrack" className="hex">
            <img src={img_3} alt="NectaTrack" />
          </Link>
        </div>
        <div className="hex">
          <Link to="/necta" className="hex">
            <img src={img_4} alt="necta" />
          </Link>
        </div>
        <div className="hex">
          <Link to="/bloomweddings" className="hex">
            <img src={img_5} alt="Bloom Weddings" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
