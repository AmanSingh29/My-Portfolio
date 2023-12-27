import React from "react";
import styles from "./SkillSection.module.css";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import {
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";

const SkillSection = () => {
  return (
    <>
      <div className={styles.skillCont}>
        <h2>My Skills</h2>
        <div className={styles.skillIcons}>
          <div className={styles.icon}>
            <FaHtml5 />
          </div>
          <div className={styles.icon}>
            <FaCss3 />
          </div>
          <div className={styles.icon}>
            <SiJavascript />
          </div>
          <div className={styles.icon}>
            <SiBootstrap />
          </div>
          <div className={styles.icon}>
            <SiReact />
          </div>
          <div className={styles.icon}>
            <SiMongodb />
          </div>
          <div className={styles.icon}>
            <SiNodedotjs />
          </div>
          <div className={styles.icon}>
            <SiExpress />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillSection;
