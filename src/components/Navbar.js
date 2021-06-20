import React, { useState } from "react";
import styled from "styled-components";
// import {FaTimes} from "react-icons/fa";
// import {FaBars} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "./logo.svg";


const Nav = styled.nav`
 display: flex;
 flex-direction: row;
 height: 65px;
 width: 100%;
 font-size: 1.1rem;
 background: #ffffff;
 box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

`

const NavbarLogo = styled(Link)`
 position: relative;
 justify-content: left;
 margin-left: 85px;
 padding: 10px 12px 5px;
 width: 320px;


@media screen and (max-width:1207px){
  width: 380px;
}


/* @media screen and (max-width:1019px){
  width: 396px;
}


@media screen and (max-width:921px){
  width: 408px;
  padding-right: 9px;
}


@media screen and (max-width:869px){
  width: 600px;
} */

`


const NavItems = styled.div`
 position: relative;
 justify-content:inline;
 align-items: center;
 justify-content:center;
 display: flex;
 margin-left: 50%;
 flex-direction: row;
 width: 60%;
 height: 60px;
 
`
     
const  NavbarLink = styled(Link)`
 color: #000000;
 text-decoration: none;
 padding: 0.5rem -2rem;
 display: inline-block;
 margin-left: -4rem;


&:hover {
  color: #faed5b;
}
`



const Navbar = () => {
  
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  function handleClick() {
    setClick(!click);
  }
  function closeMobileMenu() {
    setClick(false);
  }

  return (
    <Nav>
       <NavbarLogo to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </NavbarLogo>

       <NavItems>
        <NavbarLink to="/"> Home </NavbarLink>       
        <NavbarLink to="about"> About </NavbarLink>      
        <NavbarLink to="projects"> Projects </NavbarLink>               
        <NavbarLink to="contact"> Contact </NavbarLink>
      </NavItems>
    </Nav>

 
  );
};

export default Navbar;
