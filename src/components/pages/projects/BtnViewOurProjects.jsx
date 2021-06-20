import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Button } from 'antd';
import styled from "styled-components";


const ViewOurProjects = styled(Button)`
 position: relative;
 top: 300px;
 margin-left: -9rem;
 width: 250px;
 background: #FFFFFF;
 border: 1px solid #333333;
 box-sizing: border-box;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 border-radius: 2px;
 z-index: 1;

`





function BtnViewOurProjects(){

  // routeChange=()=> {
  //   let path = `/projects`;
  //   let history = useHistory();
  //   history.push(path);
  // }
  // onClick={(e)=>this.routeChange}

    return(
      <Link to="/projects">
        <ViewOurProjects
          size="large"
          block>
          View our projects
        </ViewOurProjects>
      </Link>
      );
}

export default BtnViewOurProjects;