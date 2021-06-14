import React from "react";
import ReactDom from 'react-dom';
import { Link } from "react-router-dom";
import { Button } from 'antd';

function BtnViewOurProjects(){
    return(
        <div className="button-2">
              <Link to="/projects">
                <Button
                  size="large"
                  style={{
                    position: "relative",
                    top: "300px",
                    left: "220px",
                    width: "250px",
                    background: "#FFFFFF",
                    border: "1px solid #333333",
                    boxSizing: "border-box",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "2px",
                    zIndex:"1"
                  }}
                  block
                >
                  View our projects
                </Button>
              </Link>
            </div>
    );
}

export default BtnViewOurProjects;