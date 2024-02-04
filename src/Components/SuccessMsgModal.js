import React, { useEffect } from "react";
import styles from "../Styles/SuccessMsgModal.module.css";
import { TiTickOutline } from "react-icons/ti";
import Aos from "aos";

const SuccessMsgModal = () => {
  useEffect(() => {
    Aos.init({
      delay: 50,
      duration: 1000,
    });
  }, []);

  return (
    <div className={styles.successModel}>
      <div className={styles.tickLogo}>
        <TiTickOutline />
      </div>
      <div className={styles.successHeading}>Success !</div>
      <div className={styles.successText}>
        <p>Message Sent Successfully.</p>
        <p>Thankyou For Connecting.</p>
      </div>
      <div className={styles.successBtn}>
        <button>Ok</button>
      </div>
    </div>
  );
};

export default SuccessMsgModal;
