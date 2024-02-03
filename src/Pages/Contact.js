import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import styles from "../Styles/Contact.module.css";
import { BiPhone, BiHome } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { TbMessageDots } from "react-icons/tb";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.contactCont}>
          <div className={styles.contactDetails}>
            <div className={styles.contactHeading}>
              <h2>Let's Connect</h2>
            </div>
            <div className={styles.contactSmallHead}>
              <h2>To work together</h2>
            </div>
            <div className={styles.personalDetails}>
              <div>
                <div className={styles.icon}>
                  <FiMail />
                </div>
                <div className={styles.detail}>amansingh979429@gmail.com</div>
              </div>
              <div>
                <div className={styles.icon}>
                  <BiPhone />
                </div>
                <div className={styles.detail}>+91 9129818796</div>
              </div>
              <div>
                <div className={styles.icon}>
                  <BiHome />
                </div>
                <div className={styles.detail}>Uttar Pradesh, India</div>
              </div>
            </div>
          </div>
          <div className={styles.contactForm}>
            <div className={styles.msgIcon}>
              <TbMessageDots />
            </div>
            <form onSubmit={handleSubmitForm}>
              <input type="text" placeholder="Your name.."></input>
              <input type="mail" placeholder="Your email.."></input>
              <textarea
                type="text"
                rows={4}
                placeholder="Your message..."
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
