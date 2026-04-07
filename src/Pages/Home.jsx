import React from "react";
import Header from "./../Components/Header/Header";
import Hero from "./../Components/Home/Hero";
import Service from "./../Components/Home/Service";
import About from "./../Components/Home/About";
import Testimonials from "./../Components/Home/Testimonal";
import Getintouch from "./../Components/Home/Getintouch";
import Form from "./../Components/Home/Form";
import Faq from "./../Components/Home/Faq";
import Footer from "./../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />

      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      <section id="service" className="scroll-mt-24">
        <Service />
      </section>

      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <section id="testimonials" className="scroll-mt-24">
        <Testimonials />
      </section>

      <section id="contact" className="scroll-mt-24">
        <Getintouch />
        <Form />
      </section>

      <section id="faq" className="scroll-mt-24">
        <Faq />
      </section>

      <Footer />
    </>
  );
};

export default Home;