import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Button } from 'antd';

const MyButton = styled(Button)`
  background: #333333;
  border-radius: 2px;
  border-color: black;
  z-index:10;
  font-size: 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    background: #333333;
    border-color: gold;
  }

`

function BtnDiscussYourProjectWithUs(){
  return(
      <Link to="/contact">
        <MyButton
          type="primary"
          size="large"
          block
        >
          
        Discuss your project with us
      </MyButton>

    </Link>    
 );
}

export default BtnDiscussYourProjectWithUs;