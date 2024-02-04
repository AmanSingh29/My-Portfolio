import React from "react";
import styles from "../Styles/SuccessMsgModal.module.css";
import { TiTickOutline } from "react-icons/ti";

const SuccessMsgModal = ({ closeModal }) => {
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
        <button onClick={() => closeModal()}>Ok</button>
      </div>
    </div>
  );
};

export default SuccessMsgModal;
