import React, { useEffect, useState } from "react";
import styles from "../Styles/ProjectCounter.module.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Aos from "aos";

const ProjectCounter = () => {
  const [counterStart, setCounterStart] = useState(false);

  useEffect(() => {
    Aos.init({
      delay: 50,
      duration: 1000,
    });
  }, []);

  return (
    <ScrollTrigger
      onEnter={() => setCounterStart(true)}
      onExit={() => setCounterStart(false)}
    >
      <div className={styles.countCont} data-aos="zoom-in">
        <div className={styles.innerCont}>
          <div className={styles.countItem}>
            <p>
              {counterStart && (
                <CountUp start={0} end={10} duration={3} delay={0} />
              )}
              +
            </p>
            <p>Projects Done</p>
          </div>
          <div className={styles.countItem}>
            <p>
              {counterStart && (
                <CountUp start={0} end={15} duration={3} delay={0} />
              )}
              +
            </p>
            <p>Technologies Learned</p>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default ProjectCounter;
