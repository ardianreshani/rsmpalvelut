import React from "react";
import Ctacall from "../components/Ctacall";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Whyus from "../components/Whyus";

const Home = () => {
  return (
    <>
      <Hero />
      <Whyus />
      <Service />
      <Ctacall />
      <Footer />
    </>
  );
};

export default Home;
