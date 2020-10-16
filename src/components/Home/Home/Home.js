import React from "react";
import Contact from "../Contact/Contact";
import Feedbacks from "../Feedbacks/Feedbacks";
import Header from "../Header/Header";
import Partners from "../Partners/Partners";
import SampleWorks from "../SampleWorks/SampleWorks";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <Header />
      <Partners />
      <Services />
      <SampleWorks />
      <Feedbacks />
      <Contact />
    </div>
  );
};

export default Home;
