import React from "react";
import "./HexagonGallery.css";
import styled from "styled-components";
import { Card } from 'antd';
import BtnContactAbout from "./BtnContactAbout.jsx";
import BtnViewOurProjectsAbout from "./ViewOurProjectsAbout.jsx";




const CardFrame = styled(Card)`
 width: 70%;
 height: 400px;
 display: flex !important;
 margin-left: 14rem;
 margin-right: -5rem;
 padding:5px;
 overflow: hidden;
 margin-top: 4rem;


 @media screen and (max-width:1024px) {
  height: 450px;
  margin-left: 10rem;
 }

 @media  screen and (max-width:768px){
  width: 77%;
  height: 568px;
  margin-left: 6rem;
 }
@media  screen and (max-width:425px){
  width: 85%;
  height: 728px;
  margin-left: 2rem;
}
@media  screen and (max-width:320px){
    /* width: 85%;
    height: 720px;
    margin-left: 22px;
    margin-top: -189px; */


    width: 85%;
    height: 720px;
    margin-left: 22px;
    margin-top: -2rem;
}

`
const CardImage = styled.img`
 margin-top: 3rem;
 width: 200px;
 height: 200px;
 @media  screen and (max-width:425px){
    margin-top: 5rem;
    width: 290px;
    height: 164px;
 }
 @media  screen and (max-width:375px){
    width: 269px;
 }
 @media  screen and (max-width:320px){
  width: 202px;
 }
`
const CardContent = styled.div`
 position: relative;
 top: -20rem;
 margin-left: 11rem;
 margin-right: 2rem;
 margin-top: 2rem;
 padding: 3.5rem;
 width: 84%;
`

const Title = styled.div`
 display: flex;
 line-height: auto;
 font-size: 3ch;
 @media  screen and (max-width:768px){
   font-size: 2ch;
 }
 @media  screen and (max-width:425px){
  margin-left: -15rem;
 }
 @media  screen and (max-width:320px){
    padding-bottom: 2rem;
    margin-right: 1rem;
    margin-top: -2rem;
    flex-direction: column;

    
 }
` 

const Name = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
  margin-right: 1rem;
`

const JobTitle = styled.div`
  position: relative;
  /* left: -3rem; */
  margin-left: -1rem;
  color: #faed5b;
  /* padding-left: 1rem; */
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
  @media  screen and (max-width:320px){
    margin-left: 0rem;
    margin-top: -2rem;
  }
`

const CardDescription = styled.div`
  text-align: left;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  display: flex;
  align-items: center;
  padding-right: 3rem;
  padding-bottom: 3rem;
  @media  screen and (max-width:425px){
    margin-top: 14rem;
    margin-left: -15rem;
    font-size: 15px;
    padding-right: 5rem;
    padding-left: 2rem;
    padding-bottom: 3rem;
  }
  @media  screen and (max-width:375px){
    padding-left: 1rem;
    padding-right: 10rem;
  }
  @media screen and (max-width:320px){
    padding-left: 1rem;
    padding-right: 24rem;
    margin-top: 13rem;

    
  }
`

const CardBtns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50px -5px;
  padding: 6rem;

  @media screen and (max-width: 425px)
    {
      flex-direction: column;
    }

    @media  screen and (max-width:320px){
     width: 60%;
    margin: -1px 54px;
    }
`


function CardEntry(props){
  return (
    <div>
      <CardFrame > 
        <CardImage src={props.src}></CardImage>
            <CardContent>
              <Title>
                <Name>{props.name} {}</Name>
                <JobTitle>{ props.jobTitle}</JobTitle>
              </Title>
              <CardDescription>{props.description}</CardDescription>        
            </CardContent>
        </CardFrame>
        <CardBtns>
          <BtnContactAbout />
          <BtnViewOurProjectsAbout />
        </CardBtns>
      </div>
    );
}

export default CardEntry;