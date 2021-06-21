import React, { useState } from "react";
import styled from "styled-components";
import { MenuOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./Navbar.css";


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
const HamburgerMenu = styled.div`
color: black;
`


const Navbar = () => {
  
  const [click, setClick] = useState(false);
  const HandleHamburgerMenu = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  // function closeMobileMenu() {
  //   setClick(false);
  // }

  return (
    <Nav>
       <NavbarLogo to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </NavbarLogo>

      <HamburgerMenu className="menu-icon "onClick={HandleHamburgerMenu}>
        {click ? <CloseOutlined /> : <MenuOutlined />}
      </HamburgerMenu>

       <NavItems className={click ? "nav-menu active" :"nav-menu"}>
        <NavbarLink to="/" onClick={closeMobileMenu}> Home </NavbarLink>       
        <NavbarLink to="about" onClick={closeMobileMenu}> About </NavbarLink>      
        <NavbarLink to="projects"onClick={closeMobileMenu}> Projects </NavbarLink>               
        <NavbarLink to="contact"onClick={closeMobileMenu}> Contact </NavbarLink>
      </NavItems>
    </Nav>

 
  );
};

export default Navbar;
