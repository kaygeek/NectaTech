import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'antd';
import styled from "styled-components";

const MyButton = styled(Button)`
  width: 200px;
  background: #333333;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  border-color: black;
  z-index: 10;
  margin-right: 15px;
  &:hover {
    background: #333333;
    border-color: gold;
  }
  @media  screen and (max-width:425px){
    margin-left: 2rem;
    width: 300px;
    margin-bottom: 2rem;
  }
  @media  screen and (max-width:320px){
    width: 258px;
  }
`

function BtnContactAbout(){
    return(
      <Link to="/contact">
        <MyButton type="primary" size="large"block>
          Contact
        </MyButton>
      </Link>  
    );
}

export default BtnContactAbout;