import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { Button } from 'antd';

const BtnDiscussProjectWithUs = styled(Button)`
 width: 320px;
 box-sizing: border-box;
 border-radius: 2px;
 z-index: 10;
 border-color: black;
 background: #333333;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 margin-right: 15px;
 &:hover {
    background: #333333;
    border-color: gold;
  }
 @media  screen and (max-width:648px){
  width: 90%;
  margin-bottom: 1rem;
 }
 @media  screen and (max-width:425px){
  width: 66%;
 }
 @media  screen and (max-width:320px){
  width: 80%;
 }

`

function BtnDiscussYourProjectWithUs(){

  const history = useHistory()

  const onClick = useCallback(
    () => {
      history.push('/contact')
    },
    [history],
  )

  return(
    <BtnDiscussProjectWithUs
      onClick={onClick}
      type="primary"
      size="large"
      block
    >
      Discuss your project with us
    </BtnDiscussProjectWithUs>
 );
}

export default BtnDiscussYourProjectWithUs;