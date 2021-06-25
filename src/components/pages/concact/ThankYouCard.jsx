import React from "react";
import { Card } from 'antd';
import Vector from "./contacts_imgs/Vector.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Group from "./contacts_imgs/Group.svg";
import image65 from "./contacts_imgs/image65.svg";
import image66 from "./contacts_imgs/image66.svg";
import {MdArrowBack} from "react-icons/fa";


const  Frame = styled.div`
 background-color: #E5E5E5;
 width: 100%;
 height: 600px;
 
`

const Vectorimg = styled.img`
 margin-top: 15rem;
 margin-bottom: 15rem;
 width: 100%;
 overflow: hidden;
`

const FlexContainer = styled.div`
  width: 100%;
  display:inline-flex;
  flex-direction: row;

`

const CardFrame = styled(Card)`
  width: 70%;
  height: 290px;
  margin-top: -27rem;
  margin-left: 13rem;
  margin-right:1 5rem;
  margin-bottom: 4rem;
  background-color:white;

`

const CardContent = styled.div`
  margin-left: 3.5rem; 
  margin-right: 5rem;
  margin-top: 2rem;
  color: black;
  width: 80%;

`

const CardImages = styled.div`
 /* margin-left: 35rem; */
 /* margin-top: 1rem; */
 margin-top: 1rem;
 margin-bottom: 1rem;
 margin-left: 5rem;
 margin-right: 2rem;
 width: 38%;
`


const Flower = styled.img`
  width: 60%;
  margin-left: 2rem; 
  margin-right: 5rem;
  margin-top: 1rem;
  margin-bottom:1rem;
`


// const Bee1 = styled.img`
// width: 5%;
// `

// const Bee2 = styled.img`
// width:5%;
// `


 const ThankYouCard = () => {
    return ( 
 <Frame>
    <Vectorimg src={Vector} alt="vector"/> 
    <CardFrame > 
        <FlexContainer>
        <CardContent>
        <h2><b>Thank you for filling out your information!</b></h2>
             <p>We appreciate you contacting us. One of our team members will be in touch with you soon.</p>
             <p>Have a great day!</p>
        </CardContent>

         <CardImages>
            {/* <Bee1 scr={image65} /> */}
            {/* <Bee2 scr={image66} /> */}
            <Flower src={Group}/>
            
         </CardImages>

        </FlexContainer>
       
     </CardFrame>
</Frame> 

     );
  }

  export default ThankYouCard;