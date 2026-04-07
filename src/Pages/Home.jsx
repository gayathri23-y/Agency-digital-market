import React from "react";
import Header from "./../Components/Header/Header"
import Hero from "./../Components/Home/Hero"
import Services from "./../Components/Home/Service"
import About from './../Components/Home/About'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About/>
    </>
  );
};

export default Home;