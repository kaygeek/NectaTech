import React from "react";
import ProjectsLayout from "./ProjectsLayout";
import "./Projects.css";
import Group64 from "./projects_images/necta_imgs/Group64.svg";
import necta1 from "./projects_images/necta_imgs/necta1.svg";
import nectap1 from "./projects_images/necta_imgs/nectap1.svg";
import Group73 from "./projects_images/scrumpro_img/Group73.svg";
import { Button } from "antd";
import ProjectsBottomContent from "./ProjectsBottomContent";
import BtnDiscussYourProjectWithUs from "./BtnDiscussYourProjectWithUs";
import BtnViewOurProjects from "./BtnViewOurProjects";

function Necta() {
  return (
    <div>
      <ProjectsLayout />

      <div className="vector-structure">
        <img className="top-vector" src={Group73} alt="vector" />
      </div>

      <div className="container">
        <img
          style={{
            position: "relative",
            top: "-80px",
            left: "-3rem",
            marginLeft: "200px",
            width: "350px",
            height: "80px",
          }}
          src={Group64}
          className="srumpro-logo"
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
        <img
          className="necta-img1"
          src={nectap1}
          alt="smartmockups_kaqomkl8 "
        />
        <img className="necta-img2" src={necta1} alt=" necta1" />
      </div>

      <Button
        href="https://necta.app/"
        className="necta-btnViewSite"
        type="primary"
        size="large"
        style={{
          position: "relative",
          top: "-18rem",
          left: "550px",
          width: "350px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // marginBottom:"2rem",
          padding: " 5px 16px",
          background: "#0E2B43",
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

export default Necta;
