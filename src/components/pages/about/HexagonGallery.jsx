import React, { useState } from "react";
import {Link} from "react-scroll";
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
  max-width: 80%;
  margin-left: 12rem;
  overflow: hidden;
  margin-top: 4rem;
  padding-bottom:1rem;
  
  @media screen and (max-width:1024px){
  margin-left: 7rem;
 }
  @media  screen and (max-width:768px){
    max-width: 86%;
    margin-left: 3rem;
  }
  @media screen and (max-width:425px){
    max-width: 77%;
    margin-left: 3rem;
  }

  @media  screen and (max-width:320px){
    margin-left: 2rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

`
const Row1 = styled.div`
 margin-left: 8rem;
 display: flex;
 flex-direction: row;
@media  screen and (max-width:1024px){
  margin-left: 1rem;
}
 @media  screen and (max-width:768px){
  margin-left: 0rem;
}
`
const Row2 = styled.div`
 display: flex;
 flex-direction: row;
 margin-top:0px;
 @media  screen and (max-width:425px){
  margin-top: -10rem;
 }
 @media screen and (max-width:320px){
    padding-bottom: 2rem;
    margin-top: -2rem; 
    margin-right: 0rem;
 }

`
const Hex = styled.div`
  width: 260px;
  height: 275px;

  @media  screen and (max-width:320px){
    width: 264px;
    height: 130px;
  }
  `


const NameContainer = styled.div`
 margin-top: -11rem;
 width: 69%;
 margin-left: 3rem;
 height: 43%;
 display:flex;
 justify-content: center;
 align-items: center;
 padding: 1;
 text-align: center;
 font-size: 1vw;
 background-color:yellow;
 display: none;

  &:hover{
    opacity: 10;
    z-index: 1;
    filter: linear-gradient(0deg, rgba(250, 237, 91, 0.5), rgba(250, 237, 91, 0.5)); 
  }
 
`


function HexagonGallery() {

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
      <Row1>
          <Hex onClick={(e)=>HandleClicks(0)} key={0} smooth={true}  > 
             <img src={img_1} alt="Bruce" />        
             <NameContainer>
                Bruce Kay
             </NameContainer>   
          </Hex>
          <Hex>
            <img src={img_2} alt="NectaBee" />
          </Hex>

        <Hex onClick={(e)=>HandleClicks(1)} key={1}  >
          <img src={img_3} alt="Courtney" />
          <NameContainer>
            Courtney Joote
          </NameContainer>     
        </Hex>
      </Row1>

      <Row2>
        <Hex onClick={(e)=>HandleClicks(2)} key={2}  className="hex">
            <img src={img_4} alt="Kgaugelo" />
          <NameContainer>
             Kgaugelo Marakalla
          </NameContainer>     
        </Hex>

        <Hex onClick={(e)=>HandleClicks(3)} key={3}  className="hex">
             <img src={img_5} alt="Merveille" />
           <NameContainer>
              Merveille Van Eck Kay
          </NameContainer>    
        </Hex>

        <Hex onClick={(e)=>HandleClicks(4)} key={4}  className="hex">
            <img src={img_6} alt="Megan" />
            <NameContainer>
              Megan Serfontein
            </NameContainer>
        </Hex>

        <Hex onClick={(e)=>HandleClicks(5)} key={5}  className="hex">
            <img src={img_7} alt="Carmyn" />
          <NameContainer>
             Carmyn vM
          </NameContainer>
         
        </Hex>
      </Row2>

       
      </HexagonContainer>    
     {card}

    
    </div>
  );
}
export default HexagonGallery;