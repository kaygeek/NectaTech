import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.svg";
import styled from "styled-components";

const footer = styled.footer`
 width: 100%;

`

// MAIN FOOTER
const MainFooter = styled.footer`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 150px;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px 20px 30px 10px;
  font-size: 1.2vw;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

`
const FooterLogo = styled(Link)`
  padding: 4px 20px;
  margin-top: 20px;
  width: 455px;
`

const MainFooterItems = styled.div`
 display: flex;
 align-items: center;
 justify-content: flex-end;
 display: flex;
 flex-direction: row;
 width: auto;
 height: 60px;

 margin-right: 20px;

`

const MainFooterLink = styled(Link)`
 color: #000000;
 text-decoration: none;

 &:hover {
  color: #faed5b;
 }

 margin: 0 10px;

`

//CHILD FOOTER
const ChildFooter = styled.footer`
 display: flex;
 flex-direction: row;
 justify-content: space-between; 
 width:100%;

 padding: 10px;

`

const FooterDate = styled.div`
 position: relative;
 align-items: center; 
 justify-content: left; 
 display: flex;
 margin-left: 20px;
 flex-direction: row;
 padding-right: 2rem;

`

const ChildFooterItems = styled.div`
 display: flex;
 justify-content: flex-end;
 align-items: center;
 padding-top: 5px;
 flex-direction: row;
 width: 96%;
 height: 40px;
 font-size: 1.2vw;
`

const ChildFooterLink = styled(Link)`
 color: #000000;
 text-decoration: none;

 margin: 0 10px;

 &:hover {
  color: #faed5b;
 }

`

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer >
      <MainFooter>
        <FooterLogo to="/">
          <img src={Logo} className="footer-logo" alt="logo" />
        </FooterLogo>

        <MainFooterItems>
          <MainFooterLink to="/"> Home </MainFooterLink>       
          <MainFooterLink to="/about"> About </MainFooterLink>      
          <MainFooterLink to="/projects"> Projects </MainFooterLink>               
          <MainFooterLink to="/contact"> Contact </MainFooterLink>
        </MainFooterItems>
      </MainFooter>

      <ChildFooter>
     
        <FooterDate>© Copyright {year} NectaTech</FooterDate>

        <ChildFooterItems>
          <ChildFooterLink to="/"> Site Map </ChildFooterLink>       
          <ChildFooterLink to="/about"> Privacy Policy </ChildFooterLink>                   
          <ChildFooterLink to="/contact"> Terms of Use </ChildFooterLink>
        </ChildFooterItems>
      </ChildFooter>
    </footer>
    
  );
}

export default Footer;
