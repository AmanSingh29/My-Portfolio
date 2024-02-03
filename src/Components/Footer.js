import React from "react";
import styles from "../Styles/Footer.module.css";
import { FaFacebook, FaGithub, FaHeart } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.footContainer}>
      <div className={styles.floatFooter}>
        <div className={styles.floatContent}>
          <p>Ready to get started?</p>
          <p>Talk to us today.</p>
        </div>
        <div className={styles.floatBtn}>
          <button>Get Started</button>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.socialMedia}>
          <Link>
            <FaFacebook />
          </Link>
          <Link>
            <SiInstagram />
          </Link>
          <Link>
            <FaGithub />
          </Link>
          <Link>
            <GrLinkedin />
          </Link>
        </div>
        <div className={styles.links}>
          <Link to={"/"} onClick={scrollToTop}>
            Home
          </Link>
          <Link onClick={scrollToTop}>About</Link>
          <Link to={"/projects"} onClick={scrollToTop}>
            Projects
          </Link>
          <Link to={"/contact"} onClick={scrollToTop}>
            Contact Us
          </Link>
        </div>
        <hr />
        <div className={styles.copyright}>
          <p>Copyright &copy;, All rights reserved to AMAN SINGH </p>
        </div>
        <div className={styles.heart}>
          <FaHeart />
        </div>
      </div>
    </div>
  );
};

export default Footer;
