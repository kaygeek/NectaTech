import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Button } from 'antd';

const MyButton = styled(Button)`
 position: relative;
 display: flex;
 flex-direction: column;
 top: -2px;
 left: 230px;
 width: 60%;
 align-items: center;
 background: #333333;
 border-radius: 2px;
 border-color: black;
 z-index:10;
 font-size: 18px;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 
 &:hover {
  background: #faed5b;
  
}

 @media screen and (max-width:1159px){
 position: relative;
 top: -2px;
 left: 60px;
 width: 90%;
 }

 /* @media screen and (max-width:869px){
  font-size: 15px;
 } */

`

function BtnDiscussYourProjectWithUs(){
  return(
      <Link to="/contact">
        <MyButton
        type="primary"
        size="large"
        block>
          
        Discuss your project with us
      </MyButton>

    </Link>    
 );
}

export default BtnDiscussYourProjectWithUs;