// MainPage.js
import React from "react";
import Home from "./Home";
import Cataloguec from "./Catalogue";
import TestDrive from "./TestDrive";
import Insurance from "./Insurance";

function MainPage({ activePage }) {
  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <Home />;
      case "catalogue":
        return <Cataloguec />;
      case "insurance":
        return <Insurance />;
        case "testdrive":
        return <TestDrive />;
      default:
        return <Home />;
    }
  };

  return <div className="main-content">{renderContent()}</div>;
}

export default MainPage;
