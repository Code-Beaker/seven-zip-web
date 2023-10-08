import React from "react";
import "./index.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import TopBanner from "./components/TopBanner";
import Content from "./components/Content";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";

const App = () => {
  return (
    <main>
      <TopBanner />
      <GoToTop />
      <NavBar />
      <Hero />
      <Content />
      <Footer />
    </main>
  );
};

export default App;
