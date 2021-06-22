import React from "react";
import "./HexagonGallery.css";
import styled from "styled-components";
import { Card } from 'antd';
import BtnContactAbout from "./BtnContactAbout.jsx";
import BtnViewOurProjectsAbout from "./ViewOurProjectsAbout.jsx";




const CardFrame = styled(Card)`
 width: 100%;
 height: 400px;
 display: flex !important;

 @media screen and (max-width:1209px) {
  height: 500px;
 }

`
const CardImage = styled.img`
 margin-top: 3rem;
 width: 200px;
 height: 200px;
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
` 

const Name = styled.div`
  color: #000;
  font-size: 3ch;
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
  font-size: 3ch;
  /* padding-left: 1rem; */
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
`

const CardDescription = styled.div`
  text-align: left;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  display: flex;
  align-items: center;
`

const CardBtns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
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