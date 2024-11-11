// App.js
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainPage from "./components/Mainpage";
import Footer from "./components/Footer";

function App() {
  const [activePage, setActivePage] = useState("home"); // Track the active page

  return (
    <>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <MainPage activePage={activePage} />
      <Footer activePage={activePage} setActivePage={setActivePage} />
    </>
  );
}

export default App;
