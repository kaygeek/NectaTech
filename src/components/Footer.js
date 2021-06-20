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
  justify-content:inline;
  align-items: center;
  padding-bottom: 30px;
  font-size: 1.2vw;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

`
const FooterLogo = styled(Link)`
  position: relative;
  left:-1.9rem;
  padding: 4px 20px;
  margin-left: 100px;
  width: 455px;


  @media screen and (max-width: 992px){
   position: relative;
   width: 700px;
   padding-right: 25px;
  }
`

const MainFooterItems = styled.div`
 position: relative;
 justify-content:inline;
 align-items: center;
 justify-content:center;
 display: flex;
 margin-left: 50%;
 flex-direction: row;
 width: 60%;
 height: 60px;


 @media screen and (max-width:984px){
  width: 90%;
  margin-left:40%
  }

`

const MainFooterLink = styled(Link)`
 color: #000000;
 text-decoration: none;
 padding: 0.5rem -2rem;
 display: inline-block;
 margin-left: -6rem;

 &:hover {
  color: #faed5b;
}
 @media screen and (max-width:984px){
   position: relative;
   left: -12rem;
   padding: 0.5rem -1rem;
   margin-left: 0px;

  }

`

//CHILD FOOTER
const ChildFooter = styled.footer`
 display: flex;
 flex-direction: row;
 justify-content:flex-start; 
 width:100%;


 @media screen and (max-width:677px){
  position: relative;
  display: inline;
 }

 
 @media screen and (max-width:939px){
  position: relative;
  display: inline;
 }

`

const FooterDate = styled.div`
 position: relative;
 left: -2rem;
 padding-left: 2rem; 
 justify-content:inline; 
 align-items: center; 
 justify-content: left; 
 display: flex;
 margin-left: 7%;
 flex-direction: row;
 padding-right: 2rem;
 

 @media screen and (max-width:1010px){
  left: 0px;
 }

 @media screen and (max-width:677px){
  justify-content: center;
  padding-top:1rem;
}

@media screen and (max-width:939px){
  justify-content: center;
  padding-top:1rem;
}

 `

const ChildFooterItems = styled.div`
 position: relative;
 left: -9rem;
 justify-content: space-evenly;
 align-items: center;
 justify-content: center;
 display: flex;
 margin-left: 20%;
 padding-top: 5px;
 flex-direction: row;
 width: 96%;
 height: 40px;
 font-size: 1.2vw;


 @media screen and (max-width:738px){
  left: 0px;
  width: 77%;
  margin-left: 5%;
 }


`
const ChildFooterLink = styled(Link)`
 color: #000000;
 text-decoration: none;
 padding: 0.5rem -2rem;
 display: inline-block;
 margin-left: -15rem;

 &:hover {
  color: #faed5b;
}

@media screen and (max-width:677px){
 margin-left:6rem;
}

@media screen and (max-width:939px){
 margin-left:6rem; 
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
        <MainFooterLink to="about"> About </MainFooterLink>      
        <MainFooterLink to="projects"> Projects </MainFooterLink>               
        <MainFooterLink to="contact"> Contact </MainFooterLink>
      </MainFooterItems>
    </MainFooter>

     <ChildFooter>
     
     <FooterDate>© Copyright {year} NectaTech</FooterDate>
        
       <ChildFooterItems>
        <ChildFooterLink to="/"> Site Map </ChildFooterLink>       
        <ChildFooterLink to="about"> Privacy Policy </ChildFooterLink>                   
        <ChildFooterLink to="contact"> Terms of Use </ChildFooterLink>
      </ChildFooterItems>
    </ChildFooter>


    </footer>
    
  );
}

export default Footer;
