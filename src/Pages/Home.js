import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import SkillSection from "../Components/SkillSection";
import Services from "../Components/Services";
import ProjectCounter from "../Components/ProjectCounter";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HeroSection />
          <AboutSection />
          <SkillSection />
          <ProjectCounter />
          <Services />
        </>
      )}
    </>
  );
};

export default Home;
