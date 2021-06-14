import React, { useState } from "react";
// import { Button } from './Button';
import { Link } from "react-router-dom";
import Logo from "./logo.svg";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="main-footer">
        <Link to="/" className="footer-logo">
          <img src={Logo} className="footer-logo" alt="logo" />
        </Link>

        <div className="link-container">

        <li className="footer-item">
          <Link to="/" className="footer-link">
            Home
          </Link>
        </li>
        <li className="footer-item">
          <Link to="/about" className="footer-link">
            About
          </Link>
        </li>
        <li className="footer-item">
          <Link to="/projects" className="footer-link">
            Projects
          </Link>
        </li>
        <li className="footer-item">
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </li>

        </div>

      </div>

      {/* child footer */}

      <div className="child-footer">
        <p>© Copyright {year} NectaTech</p>

        <div>
          <li className="child-item">
            <Link to="/sitemap" className="child-link">
              Sitemap
            </Link>
          </li>
          <li className="child-item">
            <Link to="/privacypolicy" className="child-link">
              Privacy Policy
            </Link>
          </li>
          <li className="child-item">
            <Link to="/termsofuse" className="child-link">
              Terms Of Use
            </Link>
          </li>
        </div>
      </div>
    </footer>

    // </>
  );
}

export default Footer;
