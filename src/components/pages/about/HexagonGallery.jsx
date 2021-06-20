import React, { useState } from "react";
import "./HexagonGallery.css";
import styled from "styled-components";
import team from "./Team";
import CardEntry from "./CardEntry.jsx";
import img_1 from "./about_images/img_1.svg";
import img_2 from "./about_images/img_2.svg";
import img_3 from "./about_images/img_3.svg";
import img_4 from "./about_images/img_4.svg";
import img_5 from "./about_images/img_5.svg";
import img_6 from "./about_images/img_6.svg";
import img_7 from "./about_images/img_7.svg";



const HexagonContainer = styled.div`
  margin-top: 50px;
  margin-left: 13rem;
  margin-right: 9rem;
  max-width: 95%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: 200px; 
  /* grid-gap: 14px;  */
  grid-gap: 27px;
  padding-top: 100px;
  padding-bottom: 200px;

  @media screen and (max-width:1159px){
    margin-left: 10rem;
    margin-top: 20px;

  }


  @media screen and (max-width:1024px){
    margin-left: 8rem;
    grid-gap: 79px;
    grid-auto-rows: 110px; 
  }
   /* ////////////// */
  @media screen and (max-width:768px){
    position: relative;
    top:-6rem;
    margin-left: 5rem;
    grid-gap: 73px;
    grid-auto-rows: 60px;
    padding-bottom: 80px;
  }

  @media screen and (max-width:375px){
    position: relative;
    top:-7rem;
    margin-left: 1.8rem;
    grid-gap: 40px;
    grid-auto-rows: 37px;
    padding-bottom: 80px;
 }
`

const Hex = styled.div`
  display: flex;
  position: relative;
  width: 240px;
  height: 265px;
  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

 
 @media screen and (max-width:1024px){
  width: 180px;
  height: 205px;
} 

@media screen and (max-width:768px){
  width: 135px;
  height: 150px;
}


@media screen and (max-width:375px){
  width: 78px;
  height: 78px;
}



`

function HexagonGallery() {

  const [bruce, courtney, kgaugelo, merveille, megan, carmyn] = team;



const [card, setcard] = useState("")


function HandleClicks(id){

  const member = team[id];

 setcard( 
 <CardEntry
  id = {member.id}
  name = {member.name}
  jobTitle = {member.jobTitle}
  description = {member.description}
  src = {member.src}
/>)
}

  return (
    <div>

      <HexagonContainer className="hexagon-gallery">
        <Hex onClick={(e)=>HandleClicks(0)} key={0} className="hex">
          <img  src={img_1} alt="Bruce" />
            <h2>Bruce Kay</h2>
        </Hex>
        <Hex className="hex">
          <img src={img_2} alt="NectaBee" />
        </Hex>
        <Hex onClick={(e)=>HandleClicks(1)} key={1}  className="hex">
          <img src={img_3} alt="Courtney" />
          <h2>Courtney Joote</h2>
        </Hex>
        <Hex onClick={(e)=>HandleClicks(2)} key={2}  className="hex">
          <img src={img_4} alt="Kgaugelo" />
          <h2>Kgaugelo Marakalla</h2>
        </Hex>
        <Hex onClick={(e)=>HandleClicks(3)} key={3}  className="hex">
          <img src={img_5} alt="Merveille" />
          <h2>Merveille Van Eck Kay</h2>
        </Hex>
        <Hex onClick={(e)=>HandleClicks(4)} key={4}  className="hex">
          <img src={img_6} alt="Megan" />
          <h2>Megan Serfontein</h2>
        </Hex>
        <Hex onClick={(e)=>HandleClicks(5)} key={5}  className="hex">
          <img src={img_7} alt="Carmyn" />
          <h2>Carmyn vM</h2>
        </Hex>
      </HexagonContainer>    
     {card}
    </div>
  );
}
export default HexagonGallery;