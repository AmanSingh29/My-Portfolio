import React from "react";
import myImage from "../Images/IMG_20231224_180855.png";
import Typed from "react-typed";
import styles from "./HeroSection.module.css";
import Resume from "../Images/Resume.pdf";

const HeroSection = () => {
  return (
    <>
      <div className={styles.heroCont}>
        <div className={styles.heroDetail}>
          <div className={styles.heroPara}>
            <span>T</span>
            <span>his is me</span>
          </div>
          <div className={styles.mainHeading}>
            <h1>Aman Singh</h1>
          </div>
          <div className={styles.typeWritter}>
            <span>I Am A </span>
            <Typed
              className={styles.typed}
              strings={[
                "Full Stack Developer.",
                "UI/UX Designer.",
                "Backend Developer.",
                "Frontend Developer.",
              ]}
              loop
              typeSpeed={50}
              backSpeed={50}
            />
          </div>
          <div className={styles.heroButtons}>
            <button>
              <a href={Resume} download>
                Download CV
              </a>
            </button>
            <button>Hire Me</button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src={myImage} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
