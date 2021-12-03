import React from "react";
import "../../App.css";
import Cards from "../cards/Cards";
import HeroSection from "../hero-section/HeroSection";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
