import React from "react";
import "./Projects.css";
import ProjectsLayout from "./ProjectsLayout";
import ProjectsBottomContent from "./ProjectsBottomContent";
import BtnDiscussYourProjectWithUs from "./BtnDiscussYourProjectWithUs.jsx";
import BtnViewOurProjects from "./BtnViewOurProjects";
import { Button } from "antd";
import player from "./projects_images/scrumpro_img/player.svg";
import image15 from "./projects_images/scrumpro_img/image15.svg";
import image16 from "./projects_images/scrumpro_img/image16.svg";
import Group73 from "./projects_images/scrumpro_img/Group73.svg";
import Group63 from "./projects_images/scrumpro_img/Group63.svg";

function ScrumPro() {
  return (
    <div className="scrumpro-body">
      <ProjectsLayout />

      <div className="vector-structure">
        <img className="top-vector" src={Group73} alt="vector" />
      </div>

      <div className="">
        <img
          className="srumpro-logo"
          style={{
            position: "relative",
            top: "-80px",
            marginLeft: "200px",
            width: "350px",
            height: "80px",
          }}
          src={Group63}
          alt="ScrumPro heading logo"
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
        <img className="img1" src={player} alt="Vector 16 " />
        <img className="img2" src={image16} alt="image 16 " />
        <img className="img3" src={image15} alt="image 15 " />
      </div>

      <Button
        href="https://scrumpro.co.za/"
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
          marginBottom: "2rem",
          padding: " 5px 16px",
          background: "#241637",
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

export default ScrumPro;
