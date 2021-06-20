import React from 'react';
import { Button } from 'antd';
import styeled from "styeled-components";


 const BtnViewOurSite = styeled(Button)`
  position: relative;
  left:550px;
  width: 350px;
  display: flex;
  flex-direction: column;
  alignItems: center;
  margin-bottom:2rem;,
  padding: 5px 16px;
  background: #241637;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  border-color: black;
 
 `

function BtnViewSite(){
    return(
     <BtnViewOurSite type="primary" size="large"  block>
      View Site
     </BtnViewOurSite>
    );
}

export default BtnViewSite;