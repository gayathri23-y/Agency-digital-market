import React from "react";
import Header from "./../Components/Header/Header"
import Hero from "./../Components/Home/Hero"
import Services from "./../Components/Home/Service"
import About from './../Components/Home/About'
import Testimonials from './../Components/Home/Testimonal'
import Getintouch from './../Components/Home/Getintouch'
import Form from './../Components/Home/Form'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About/>
      <Testimonials/>
      <Getintouch/>
      <Form/>
    </>
  );
};

export default Home;