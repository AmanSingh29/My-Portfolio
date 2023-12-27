import React from "react";
import { ClockLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <>
      <div className={styles.loaderCont}>
        <ClockLoader color="#002D62" size={60} speedMultiplier={1.5} />
      </div>
    </>
  );
};

export default Loader;
