import React from "react";
import ProjectsLayout from "./ProjectsLayout";
import "./Projects.css";
import NectaTrack_Logo from "./projects_images/nectatrack_imgs/NectaTrack_Logo.svg";
import image14 from "./projects_images/nectatrack_imgs/image14.svg";
import smartmockups_kaqomkl8 from "./projects_images/nectatrack_imgs/smartmockups_kaqomkl8.svg";
import { Button } from "antd";
import Group73 from "./projects_images/scrumpro_img/Group73.svg";
import playerprofile2 from "./projects_images/playpro_imgs/playerprofile2.svg";
import ProjectsBottomContent from "./ProjectsBottomContent";
import BtnDiscussYourProjectWithUs from "./BtnDiscussYourProjectWithUs";
import BtnViewOurProjects from "./BtnViewOurProjects";

function NectaTrack() {
  return (
    <div>
      <ProjectsLayout />

      <div className="vector-structure">
        <img className="top-vector" src={Group73} alt="vector" />
      </div>

      <div className="container">
        <img
          src={NectaTrack_Logo}
          className="App-logo"
          style={{
            position: "relative",
            top: "-80px",
            marginLeft: "200px",
            width: "350px",
            height: "80px",
          }}
          className="srumpro-logo"
        />

        {/* <img src={NectaTrack_logo} className="App-logo" alt="logo" /> */}

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
        <img className="nectatrack-img1" src={image14} alt=" image 14" />
        <img
          className="nectatrack-img2"
          src={smartmockups_kaqomkl8}
          alt="smartmockups_kaqomkl8"
        />
      </div>

      <Button
        href="https://www.necta.tech/NectaTrack"
        className="scrumpro-btnViewSite"
        type="primary"
        size="large"
        style={{
          position: "relative",
          top: "-14rem",
          left: "550px",
          width: "350px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "2rem",
          padding: " 5px 16px",
          background: "#0F4C81",
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

export default NectaTrack;
