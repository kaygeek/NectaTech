import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Button } from 'antd';
import styled from "styled-components";


const ViewOurProjects = styled(Button)`
 width: 250px;
 background: #FFFFFF;
 border: 1px solid #333333;
 box-sizing: border-box;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 border-radius: 2px;
 z-index: 10;
 margin-left: 15px;
 @media  screen and (max-width:648px){
  width: 90%;
  margin-left: -1rem;
 }
`


function BtnViewOurProjects(){

  const history = useHistory()

  const onClick = useCallback(() => history.push('/projects'), [history])


    return(
      <ViewOurProjects
        onClick={onClick}
        size="large"
        block>
        View our projects
      </ViewOurProjects>
    );
}

export default BtnViewOurProjects;