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