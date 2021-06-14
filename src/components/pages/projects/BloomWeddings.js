import React from "react";
import ProjectsLayout from "./ProjectsLayout";
import "./Projects.css";
import { Button } from "antd";
import ProjectsBottomContent from "./ProjectsBottomContent";
// import BtnViewSite from "./BtnViewSite";
import BtnDiscussYourProjectWithUs from "./BtnDiscussYourProjectWithUs";
import BtnViewOurProjects from "./BtnViewOurProjects";
import Group66 from "./projects_images/bloomWed_imgs/Group66.svg";
import Group1 from "./projects_images/bloomWed_imgs/Group1.svg";
import smartmockups_knh8mjgh1 from "./projects_images/bloomWed_imgs/smartmockups_knh8mjgh1.svg";
import Group73 from "./projects_images/scrumpro_img/Group73.svg";

function BloomWeddings() {
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
            top: "-60px",
            marginLeft: "199px",
            width: "517.92px",
            height: "300px",
          }}
          src={Group66}
          className="srumpro-logo"
          alt="logo"
        />
        <p className="bloomwed-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec non massa
          orci enim. Nec amet mollis eget mauris praesent neque, augue ut.
          Commodo, leo, sollicitudin velit amet. Ac et tempor lectus gravida
          senectus enim habitasse quis enim. Vitae integer ullamcorper massa
          ipsum. Amet, feugiat vitae vitae at sed viverra tempus. Odio habitant
          nisi congue orci purus facilisis porttitor.
        </p>
      </div>
      <div className="flex-container">
        <img className="bloomwed-img1" src={Group1} alt="Group1  " />
        <img
          className="bloomwed-img2"
          src={smartmockups_knh8mjgh1}
          alt="smartmockups_knh8mjgh1  "
        />
      </div>

      <Button
        href="https://bloomweddings.co.za/login"
        className="bloomwed-btnViewSite"
        type="primary"
        size="large"
        style={{
          position: "relative",
          top: "-17rem",
          left: "550px",
          width: "249px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // marginBottom:"2rem",
          padding: " 5px 16px",
          background: "#F8BBD0",
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

export default BloomWeddings;
