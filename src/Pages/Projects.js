import React, { useEffect, useState } from "react";
import Aos from "aos";
import styles from "../Styles/Projects.module.css";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";
import { MdOutlinePreview } from "react-icons/md";
import { FaGithub, FaHandPointRight } from "react-icons/fa";
import weTweetImg from "../Images/weTweet.jpg";
import ECommImg from "../Images/Ecommerce.jpg";
import EComm2Img from "../Images/Ecomm.jpg";
import { GoProject } from "react-icons/go";

const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({
      delay: 50,
      duration: 1000,
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.projectsMainCont}>
          <div className={styles.projectsHeading}>
            <h1>My Projects </h1>
            <span>
              <GoProject />
            </span>
          </div>
          <div className={styles.projectCont}>
            <div className={styles.projectImg} data-aos="zoom-in">
              <img src={weTweetImg} alt="we-tweet" />
            </div>
            <div className={styles.projectDetails} data-aos="fade-left">
              <div className={styles.projectTitle}>
                <h3>We-Tweet App</h3>
              </div>
              <div className={styles.projectDescription}>
                <p>
                  <span className={styles.handIcon}>
                    <FaHandPointRight />
                  </span>
                  Developed and implemented a full-stack social media app
                  resembling Twitter.
                </p>
                <p>
                  <span className={styles.handIcon}>
                    <FaHandPointRight />
                  </span>
                  Enabled user registration, login, and redirection to the home
                  page upon login.
                </p>
                <p>
                  <span className={styles.handIcon}>
                    <FaHandPointRight />
                  </span>
                  Implemented tweet functionalities allowing users to post with
                  or without images, like, reply, and retweet.
                </p>
                <p>
                  <span className={styles.handIcon}>
                    <FaHandPointRight />
                  </span>
                  Created a detailed tweet view, redirection to tweet detail
                  pages, user profile pages, profile editing.
                </p>
              </div>
              <div className={styles.projectLinks}>
                <div className={styles.linkButtons}>
                  <Link to={"https://we-tweet.netlify.app/"} target="_blank">
                    <MdOutlinePreview />
                  </Link>
                  <Link
                    to={"https://github.com/AmanSingh29/Twitter-Clone"}
                    target="_blank"
                  >
                    <FaGithub />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.projectCont} ${styles.reverse}`}>
            <div className={styles.projectImg} data-aos="zoom-in">
              <img src={ECommImg} alt="ecomm" />
            </div>
            <div className={styles.projectDetails} data-aos="fade-right">
              <div className={styles.projectTitle}>
                <h3>Ecommerce (MERN)</h3>
              </div>
              <div className={styles.projectDescription}>
                <p>
                  <span className={styles.handIcon}>
                    <FaHandPointRight />
                  </span>
                  User-friendly e-commerce website with dynamic product display
                  and cart functionality.
                </p>
                <p>
                  <span className={styles.handIcon}>
                    <FaHandPointRight />
                  </span>
                  Efficient pagination and filter system for easy product
                  navigation and categorization.
                </p>
                <p>
                  <span className={styles.handIcon}>
                    <FaHandPointRight />
                  </span>
                  Robust search functionality by name or keywords for quick
                  product discovery.
                </p>
                <p>
                  <span className={styles.handIcon}>
                    <FaHandPointRight />
                  </span>
                  Secure authentication with forgot password mechanism for user
                  account recovery.
                </p>
                <p>
                  <span className={styles.handIcon}>
                    <FaHandPointRight />
                  </span>
                  Admin dashboard for streamlined category and product
                  management, order status updates, and user details
                  modification.
                </p>
              </div>
              <div className={styles.projectLinks}>
                <div className={styles.linkButtons}>
                  <Link
                    to={"https://shop-for-you.netlify.app/"}
                    target="_blank"
                  >
                    <MdOutlinePreview />
                  </Link>
                  <Link
                    to={
                      "https://github.com/AmanSingh29/Ecommerce-Full-stack-app"
                    }
                    target="_blank"
                  >
                    <FaGithub />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.projectCont}>
            <div className={styles.projectImg} data-aos="zoom-in">
              <img src={EComm2Img} alt="ecomm2" />
            </div>
            <div className={styles.projectDetails} data-aos="fade-left">
              <div className={styles.projectTitle}>
                <h3>Ecommerce (Frontend)</h3>
              </div>
              <div className={styles.projectDescription}>
                <p>
                  <span className={styles.handIcon}>
                    <FaHandPointRight />
                  </span>
                  Full responsiveness across all pages for optimal user
                  experience on diverse devices.
                </p>
                <p>
                  <span className={styles.handIcon}>
                    <FaHandPointRight />
                  </span>
                  Dynamically rendered header and footer sections using
                  JavaScript for consistent navigation.
                </p>
                <p>
                  <span className={styles.handIcon}>
                    <FaHandPointRight />
                  </span>
                  Intuitive header design with logo, search box, login, and cart
                  buttons for enhanced accessibility.
                </p>
                <p>
                  <span className={styles.handIcon}>
                    <FaHandPointRight />
                  </span>
                  Visually appealing design with imported fonts, logos,
                  eye-catching hover effects, and seamless page redirection.
                </p>
              </div>
              <div className={styles.projectLinks}>
                <div className={styles.linkButtons}>
                  <Link to={"https://aman-shop.netlify.app/"} target="_blank">
                    <MdOutlinePreview />
                  </Link>
                  <Link
                    to={"https://github.com/AmanSingh29/Ecommerce"}
                    target="_blank"
                  >
                    <FaGithub />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
