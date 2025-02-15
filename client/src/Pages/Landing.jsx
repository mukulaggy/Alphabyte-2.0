import React from "react";
import Hero from "../components/Landing/Hero";
import About from "../components/Landing/About";
import Timeline from "../components/Landing/Timeline";
import Details from "../components/Landing/Details";
import Sponsors from "../components/Landing/Sponsors";
import FAQ from "../components/Landing/FAQ";
import Footer from "../components/Landing/Footer";
import Navbar from "../components/Navbar";
import Prizes from "../components/Landing/Prises";
import Lastyear from "../components/Landing/Lastyear";

const Landing = () => {
  return (
    <div className="bg-black">
      <Navbar />

      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="details">
        <Details />
      </section>
      <section id="timeline">
        <Timeline />
      </section>
      <section id="sponsors">
        <Sponsors />
      </section>
      <section id="prizes">
        <Prizes />
      </section>
      <section id="lastyear">
        <Lastyear/>
      </section>
      <section id="faq">
        <FAQ />
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
