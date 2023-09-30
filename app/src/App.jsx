import React from "react";
import "./index.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import TopBanner from "./components/TopBanner";
import Content from "./components/Content";

const App = () => {
  return (
    <>
      <TopBanner />
      <NavBar />
      <Hero />
      <Content />
    </>
  );
};

export default App;
