import React from "react";
import "./styles.css";

function Navbar({ activePage, setActivePage }) {
  return (
    <div className="navbox">
      <div className="notnav">
        <div className="logo">
          <p className="anc" onClick={() => setActivePage("home")}>Gedi</p>
        </div>
        
        <div className="anchorbox">
          <div 
            className={`abox ${activePage === "home" ? "active" : ""}`} 
            onClick={() => setActivePage("home")}
          >
            Home
          </div>
          <div 
            className={`abox ${activePage === "catalogue" ? "active" : ""}`} 
            onClick={() => setActivePage("catalogue")}
          >
            Catalogue
          </div>
          <div 
            className={`abox ${activePage === "insurance" ? "active" : ""}`} 
            onClick={() => setActivePage("insurance")}
          >
            Insurance
          </div>
          <div 
            className={`abox ${activePage === "testdrive" ? "active" : ""}`} 
            onClick={() => setActivePage("testdrive")}
          >
            Test Drive
          </div>
        </div>

        <div className="end">
          <div className="searchbox">
            <div className="shit">
              <input 
                type="search" 
                name="search" 
                placeholder="Search" 
                className="searchtag" 
              />
              <img 
                src="https://www.svgrepo.com/show/521826/search.svg" 
                alt="Search Icon" 
                className="searchicon" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
