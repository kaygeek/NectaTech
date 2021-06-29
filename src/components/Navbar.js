import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./logo.svg";


const Nav = styled.nav`
 position: sticky;
 top:0;
 display: flex;
 flex-direction: row;
 height: 65px;
 width: 100%;
 font-size: 1.1rem;
 overflow: hidden;
 background: #ffffff;
 box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
 z-index: 10px;
 @media  screen and (max-width:700px){
  height: 100px;
  display: flex;
  flex-direction: column;
 }
`

const NavbarLogo = styled(Link)`
 position: relative;
 justify-content: left;
 margin-left: 85px;
 padding: 10px 12px 5px;
 width: 320px;

 @media  screen and (max-width:700px){
   left: 33%;
   justify-content: center;
   margin-left:0px;
 }
 @media  screen and (max-width:425px){
  width: 280px;
  left: 23%;
 }
 @media  screen and (max-width:375px){
   width: 250px;
   left: 18%;
 }
 @media  screen and (max-width:320px){
  left: 15%;
 }

`


const NavItems = styled.div`
 position: relative;
 justify-content:inline;
 align-items: center;
 justify-content: flex-end;
 display: flex;
 flex-direction: row;
 width: 60%;
 height: 60px;
 @media  screen and (max-width:700px){
  justify-content: center;
  left: 20%;
  
 }
`
     
const  NavbarLink = styled(Link)`
 color: #000000;
 text-decoration: none;
 padding: 0;
 margin: 0px 10px;
&:hover {
  color: #faed5b;
}
`



const Navbar = () => {
  
  return (
    <Nav className="sticky-nav">
       <NavbarLogo to="/">
        <img height='50px' width='auto' src={logo} className="App-logo" alt="logo" />
      </NavbarLogo>

       <NavItems>
        <NavbarLink to="/"> Home </NavbarLink>       
        <NavbarLink to="/about"> About </NavbarLink>      
        <NavbarLink to="/projects"> Projects </NavbarLink>               
        <NavbarLink to="/contact"> Contact </NavbarLink>
      </NavItems>
    </Nav>

 
  );
};

export default Navbar;
