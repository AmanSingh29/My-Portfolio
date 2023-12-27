import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import SkillSection from "../Components/SkillSection";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
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
        </>
      )}
    </>
  );
};

export default Home;
