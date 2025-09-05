import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Sections from "./components/Sections.jsx";
import Footer from "./components/Footer.jsx";

// src/App.jsx
function App() {
  return (
    <>
    <Navbar />
    <Sections />
    <Footer />
    </>
  );
}

export default App;
