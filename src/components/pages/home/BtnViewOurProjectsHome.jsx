import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'antd';
import styled from 'styled-components';



const MyButton = styled(Button)`
    width: 60%;
    position: relative;
    left: 45px;
    background: #FFFFFF;
    border: 1px solid #333333;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    z-index:1;
    font-size: 18px;

    @media screen and (max-width:1159px){
    width: 80%;
    position: relative;
    left: 40px;
    font-size: 18px;


    @media only screen and (max-width: 795px){
    left: 57px;
    top: 2rem;
    width: 90%;
    }

    }
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