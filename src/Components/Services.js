import React, { useEffect } from "react";
import styles from "../Styles/Services.module.css";
import { CgWebsite } from "react-icons/cg";
import { IoCodeSlashSharp } from "react-icons/io5";
import { ImCodepen } from "react-icons/im";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import Aos from "aos";

const Services = () => {
  useEffect(() => {
    Aos.init({
      delay: 50,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className={styles.serviceMain}>
        <h2>My Services</h2>
        <div className={styles.servicesCont}>
          <div className={styles.service} data-aos="fade-right">
            <div className={styles.icon}>
              <CgWebsite />
            </div>
            <div className={styles.title}>Fullstack Development</div>
            <div className={styles.description}>
              “It is not because things are difficult that we do not dare; it is
              because we do not dare that they are difficult.”
            </div>
          </div>
          <div className={styles.service} data-aos="fade-left">
            <div className={styles.icon}>
              <IoCodeSlashSharp />
            </div>
            <div className={styles.title}>Api's Developing</div>
            <div className={styles.description}>
              “It is not because things are difficult that we do not dare; it is
              because we do not dare that they are difficult.”
            </div>
          </div>
          <div className={styles.service} data-aos="fade-right">
            <div className={styles.icon}>
              <ImCodepen />
            </div>
            <div className={styles.title}>Backend Development</div>
            <div className={styles.description}>
              “It is not because things are difficult that we do not dare; it is
              because we do not dare that they are difficult.”
            </div>
          </div>
          <div className={styles.service} data-aos="fade-left">
            <div className={styles.icon}>
              <LiaLaptopCodeSolid />
            </div>
            <div className={styles.title}>Frontend Development</div>
            <div className={styles.description}>
              “It is not because things are difficult that we do not dare; it is
              because we do not dare that they are difficult.”
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
