import React from "react";
import "./footer.css";

function Footer({ activePage, setActivePage }) {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="sections">
          <div className="section1">
            <p 
              className="footer-title" 
              onClick={() => setActivePage("home")}
            >
              Gedi
            </p>
          </div>
          <div className="section2">
            <p 
              className={`footer-link ${activePage === "home" ? "active" : ""}`} 
              onClick={() => setActivePage("home")}
            >
              Home
            </p>
            <p 
              className={`footer-link ${activePage === "catalogue" ? "active" : ""}`} 
              onClick={() => setActivePage("catalogue")}
            >
              Catalogue
            </p>
            <p 
              className={`footer-link ${activePage === "insurance" ? "active" : ""}`} 
              onClick={() => setActivePage("insurance")}
            >
              Insurance
            </p>
            <p 
              className={`footer-link ${activePage === "testdrive" ? "active" : ""}`} 
              onClick={() => setActivePage("testdrive")}
            >
                testdrive
            </p>
          </div>
          <div className="section3">
            <p className="footer-link">BMW</p>
            <p className="footer-link">AMG</p>
            <p className="footer-link">AUDI</p>
          </div>
        </div>
        <p className="footer-note">© Reserved 2024 by Gedi</p>
      </div>
    </div>
  );
}

export default Footer;
