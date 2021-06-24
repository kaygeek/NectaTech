import React from "react";
import { Card } from 'antd';
import Vector from "./contacts_imgs/Vector.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Group from "./contacts_imgs/Group.svg";
import image65 from "./contacts_imgs/image65.svg";
import image66 from "./contacts_imgs/image66.svg";



const  Frame = styled.div`
 background-color: #E5E5E5;
 width: 100%;
 
`

const Vectorimg = styled.img`
 margin-top: 15rem;
 margin-bottom: 15rem;
 width: 100%;
 overflow: hidden;
 
`
const CardFrame = styled(Card)`
 display: flex ;
 flex-direction: row;
 width: 70%;
 height: 250px;
 background-color:white;
 top: -25rem;
 margin-bottom: 4rem;
 margin-left: 14rem;
 margin-right:12rem;
 padding-bottom:9rem;
 /* overflow: hidden; */
`

const CardContent = styled.div`
  margin-left: 3.5rem; 
  margin-right: 2rem;
  margin-top: 2rem;
  width: 75%;
  color: black;
`

const CardImages = styled.div`
margin-left: 35rem;
margin-top: -11rem;
width: 40%;
`
const Flower = styled.img`
 width: 100%;
 height: 200px;
`
// const Bee1 = styled.img`
// width: 100%;
// `
// const Bee2 = styled.img`
// width: 100%;
// `


 const ThankYouCard = () => {
    return ( 
        <Frame>

      <Vectorimg src={Vector} alt="vector"/> 


        <CardFrame > 
        <CardContent>
          <h2><b>Thank you for filling out your information!</b></h2>
          <p>We appreciate you contacting us. One of our team members will be in touch with you soon.</p>
          <p>Have a great day!</p>

        </CardContent>

        <CardImages>
        <Flower src={Group}/>
        {/* <Bee1 scr={image65} />
        <Bee2 scr={image66} /> */}
        </CardImages>

       </CardFrame>
        </Frame> 

     );
  }

  export default ThankYouCard;