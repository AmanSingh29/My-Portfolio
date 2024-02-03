import React, { useEffect } from "react";
import styles from "../Styles/AboutSection.module.css";
import Image from "../Images/aboutSec.png";
import Aos from "aos";

const AboutSection = () => {
  useEffect(() => {
    Aos.init({
      delay: 50,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className={styles.aboutSecCont}>
        <div className={styles.aboutSecImage} data-aos="zoom-in">
          <img src={Image} alt="about-image" />
        </div>
        <div className={styles.aboutSecDetails} data-aos="fade-left">
          <div className={styles.aboutHeading}>
            <h2>About Me</h2>
          </div>
          <div className={styles.aboutDesc}>
            <span>
              Full Stack Web Developer skilled in MERN (MongoDB, Express.js,
              React.js, Node.js) stack. Passionate about crafting seamless,
              responsive applications. Excels in both frontend and backend
              development, with a keen eye for user experience and
              functionality.
            </span>
          </div>
          <div className={styles.aboutSecBtn}>
            <button>See Full Details</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
