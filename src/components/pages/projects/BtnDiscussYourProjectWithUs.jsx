import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { Button } from 'antd';

const BtnDiscussProjectWithUs = styled(Button)`
 position: relative;
 top: 300px;
 margin-left: 10rem;
 width: 320px;
 box-sizing: border-box;
 border-radius: 2px;
 z-index: 1;
 background: #333333;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 
`

function BtnDiscussYourProjectWithUs(){

  // const history = useHistory();

  // const routeChange = (e) =>{ 
  //   let path = `/contact`; 
  //   history.push(path);
  // }


  // onClick={(e)=>this.routeChange}

  return(
    <Link to="/contact">
    <BtnDiscussProjectWithUs
    type="primary"
    size="large"
    block>
      
    Discuss your project with us
  </BtnDiscussProjectWithUs>

</Link>   
 );
}

export default BtnDiscussYourProjectWithUs;