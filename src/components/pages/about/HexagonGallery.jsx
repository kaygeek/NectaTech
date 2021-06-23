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
  /* max-width: 100%; */
  margin-left: -2rem;
  margin-right: 4rem;
  max-width: 1010px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: 200px; 
  grid-gap: 27px;
  padding-top: 100px;
  padding-bottom: 200px;

 
`


const Hex = styled.div`
  width: 260px;
  height: 275px;
  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: none;
   
  &:hover {
  opacity:0.3;
  color: linear-gradient(0deg, rgba(250, 237, 91, 0.5), rgba(250, 237, 91, 0.5)); 
  
}
  
  img{
    width: 100%;
    height: auto;
    display: block;
    object-fit:cover;
    transition: .3s ease;
    backface-visibility: hidden;
    
  } 
 
`




const NameContainer = styled.div`
 width: 100%;
 height: 100%;
 display:flex;
 justify-content: center;
 align-items: center;
 padding: 1;
 text-align: center;

  &:hover{
    opacity:1;
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
        <Hex onClick={(e)=>HandleClicks(0)} key={0} className="hex"> 
          <img src={img_1} alt="Bruce" />        
          <NameContainer>
          Bruce Kay
          </NameContainer>
          
            
        </Hex>

        <Hex className="hex">
          <img src={img_2} alt="NectaBee" />
        </Hex>

        <Hex onClick={(e)=>HandleClicks(1)} key={1}  className="hex">
          <img src={img_3} alt="Courtney" />
          <NameContainer>
          Courtney Joote
          </NameContainer>
          
        </Hex>

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
      </HexagonContainer>    
     {card}

    
    </div>
  );
}
export default HexagonGallery;