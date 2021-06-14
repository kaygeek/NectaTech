import React, { useState } from "react";
// import styled from "styled-components";
// import {FaTimes} from "react-icons/fa";
// import {FaBars} from "react-icons/fa";
import { Link } from "react-router-dom";
// import { Link as linkScroll} from "react-scroll";
import logo from "./logo.svg";
import "./Navbar.css";






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
    // <Nav>
    //   <NavbarContainer>
    //     <NavbarLogo to="/">
    //       <img src={logo} className="App-logo" alt="logo" />
    //     </NavbarLogo>

    //     {/* Hamburger icon */}
    //     <MobileIcon>
    //       <FaBars />
          
    //     </MobileIcon>

    //     <NavMenu>
    //       <NavbarItem>
    //         <NavbarLink to="/"> Home </NavbarLink>
    //       </NavbarItem>
    //       <NavbarItem>
    //         <NavbarLink to="about"> About </NavbarLink>
    //       </NavbarItem>
    //       <NavbarItem>
    //         <NavbarLink to="projects"> Projects </NavbarLink>
    //       </NavbarItem>
    //       <NavbarItem>
    //         <NavbarLink to="contact"> Contact </NavbarLink>
    //       </NavbarItem>
    //     </NavMenu>
    //   </NavbarContainer>
    // </Nav>

    <Navbar className='navbar'>
      <div>

      </div>
      <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
      <img src={logo} className="App-logo" alt="logo" />
      </Link>
    {/* Hamburger icon */}
    <div className='menu-icon' onClick={handleClick}>
      <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
    </div>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
        </li>

        <li className='nav-item'>
          <Link
            to='/about'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            About
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/projects'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Projects
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/contact'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </li>

      </ul>

    </Navbar>
  );
};

export default Navbar;
