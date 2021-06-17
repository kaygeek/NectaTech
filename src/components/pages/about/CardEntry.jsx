import React from "react";
import "./HexagonGallery.css";
import { Card } from 'antd';
import BtnContactAbout from "./BtnContactAbout.jsx";
import BtnViewOurProjectsAbout from "./ViewOurProjectsAbout.jsx";




function CardEntry(props){
    return (
        <div>
        <Card style={{marginBottom:"10rem"}} className="card">
          <div className="card-container">
            {/* <img src={img_1}></img> */}
            <div className="card-content">

              <div className="title">
                <h3 className="name">{props.name}</h3>
                <p className="job-title">{ props.jobTitle}</p>
              </div>
              <p className="card-description">{props.description}</p>
                
            </div>
          </div>
        </Card>
        
        <div className="BtnAbout-container">
        <BtnContactAbout />
        <BtnViewOurProjectsAbout />
        </div>
      </div>
    );
}

export default CardEntry;