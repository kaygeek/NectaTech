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
  @media  screen and (max-width:425px){
    flex-direction: column;
  }

`

const CardFrame = styled(Card)`
  width: 70%;
  height: 290px;
  margin-top: -27rem;
  margin-left: 13rem;
  margin-right: 5rem;
  margin-bottom: 4rem;
  background-color:white;

  @media screen and (max-width: 1028px){
    margin-left: 10rem;
  }
  @media  screen and (max-width:768px){
    margin-left: 8rem;
    height: 347px;
  }
  @media  screen and (max-width:425px){
    margin-left: 2rem;
    height: 440px;
    width: 82%;
  }

`

const CardContent = styled.div`
  margin-left: 3.5rem; 
  margin-right: 5rem;
  margin-top: 2rem;
  color: black;
  width: 80%;
  @media  screen and (max-width:768px){
    margin-right: -5rem;
  }
@media  screen and (max-width:425px){
  margin-left: 2.5rem;
}
 @media  screen and (max-width:320px){
  margin-left: 1.5rem;
 }
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
  @media screen and (max-width: 768px){
    width: 85%;
    margin-left: 1rem;
    margin-top: 3rem;
  }
  @media  screen and (max-width:425px){
    width: 88%;
    margin-top: 0rem;
  }
  @media  screen and (max-width:375px){
    width: 80%;
    margin-top: 0rem;
    margin-left: 6rem;
    margin-top: -2rem;
  }
  @media  screen and (max-width:320px){
    width: 47%;
    margin-top: 0rem;
    margin-left: 0rem;
    margin-top: 0rem;
  }
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