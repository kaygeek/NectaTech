import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'antd';
import styled from 'styled-components';

const MyButton = styled(Button)`
    width: 100px;
    position:relative;
    /* top: -300px; */
    left: 220px;
    width: 250px ;
    background:#FFFFFF;
    border: 1px solid #333333;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    z-index:1;
    `

function BtnViewOurProjectsHome() {
  return (
      <Link to="/projects">
        <MyButton
          size="large"
          block>
          View our projects
        </MyButton>
      </Link>
  );
}

export default BtnViewOurProjectsHome;