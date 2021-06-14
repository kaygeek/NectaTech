import React from "react";
import ProjectsLayout from "./ProjectsLayout";
import "./Projects.css";
import flat from "./projects_images/playpro_imgs/flat.svg";
import image12 from "./projects_images/playpro_imgs/image12.svg";
import { Button } from "antd";
import Group73 from "./projects_images/scrumpro_img/Group73.svg";
import playerprofile2 from "./projects_images/playpro_imgs/playerprofile2.svg";
import ProjectsBottomContent from "./ProjectsBottomContent";
import BtnDiscussYourProjectWithUs from "./BtnDiscussYourProjectWithUs";
import BtnViewOurProjects from "./BtnViewOurProjects";

function PlayPro() {
  return (
    <div>
      <ProjectsLayout />

      <div className="vector-structure">
        <img className="top-vector" src={Group73} alt="vector" />
      </div>

      <div className="container">
        <img
          className="playpro-logo"
          style={{
            position: "relative",
            top: "-80px",
            marginLeft: "200px",
            width: "350px",
            height: "80px",
          }}
          src={flat}
          alt="logo"
        />

        <p className="scrumpro-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec non massa
          orci enim. Nec amet mollis eget mauris praesent neque, augue ut.
          Commodo, leo, sollicitudin velit amet. Ac et tempor lectus gravida
          senectus enim habitasse quis enim. Vitae integer ullamcorper massa
          ipsum. Amet, feugiat vitae vitae at sed viverra tempus. Odio habitant
          nisi congue orci purus facilisis porttitor.
        </p>
      </div>
      <div className="flex-container">
        <img className="playpro-img1" src={image12} alt="image 12 " />
        <img
          className="playpro-img2"
          src={playerprofile2}
          alt="playerprofile2  "
        />
      </div>

      <Button
        href="https://www.necta.tech/PlayPro"
        className="scrumpro-btnViewSite"
        type="primary"
        size="large"
        style={{
          position: "relative",
          // top:"-10rem",
          left: "550px",
          width: "350px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: " 5px 16px",
          background: "#3ECC80",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "2px",
          border: "none",
        }}
        block
      >
        View Site
      </Button>
      <div className="flex-container">
        <BtnDiscussYourProjectWithUs />
        <BtnViewOurProjects />
      </div>

      <ProjectsBottomContent />
    </div>
  );
}

export default PlayPro;
