import React, { useEffect, useState, useRef } from "react";
import Loader from "../Components/Loader";
import styles from "../Styles/Contact.module.css";
import { BiPhone, BiHome } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { TbMessageDots } from "react-icons/tb";
import { LiaHandshake } from "react-icons/lia";
import { PulseLoader } from "react-spinners";
import Aos from "aos";
import SuccessMsgModal from "../Components/SuccessMsgModal";

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [msgLoad, setMsgLoad] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [showErrMsg, setShowErrMsg] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    Aos.init({
      delay: 50,
      duration: 1000,
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const nameRef = useRef();
  const mailRef = useRef();
  const msgRef = useRef();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setMsgLoad(true);
    const fullName = nameRef.current.value;
    const email = mailRef.current.value;
    const message = msgRef.current.value;
    fetch("http://localhost:5000/api/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, email, message }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setErrMsg(data.error);
          setShowErrMsg(true);
          setMsgLoad(false);
          setTimeout(() => {
            setShowErrMsg(false);
          }, 4000);
          return;
        }
        nameRef.current.value = "";
        mailRef.current.value = "";
        msgRef.current.value = "";
        setMsgLoad(false);
      })
      .catch((err) => {
        console.log(err);
        setMsgLoad(false);
      });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {showModal ? (
            <div
              className={styles.successModelCont}
              onClick={() => setShowModal(false)}
            >
              <SuccessMsgModal />
            </div>
          ) : (
            ""
          )}

          <div className={styles.contactCont}>
            <div className={styles.contactDetails} data-aos="fade-right">
              <div className={styles.contactHeading}>
                <h2>Let's Connect..</h2>
              </div>
              <div className={styles.contactSmallHead}>
                <h2>To work together</h2>
                <div>
                  <LiaHandshake />
                </div>
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
            <div className={styles.contactForm} data-aos="zoom-out">
              <div className={styles.msgIcon}>
                <TbMessageDots onClick={() => setShowModal(true)} />
              </div>
              <form onSubmit={handleSubmitForm}>
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="Your name.."
                ></input>
                <input
                  ref={mailRef}
                  type="email"
                  placeholder="Your email.."
                ></input>
                <textarea
                  ref={msgRef}
                  type="text"
                  rows={4}
                  placeholder="Your message..."
                ></textarea>
                {showErrMsg ? <p className={styles.errorMsg}>{errMsg}</p> : ""}
                <button
                  disabled={msgLoad}
                  type="submit"
                  className={styles.submitBtn}
                >
                  {msgLoad ? (
                    <PulseLoader color="#ffffff" size={10} />
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
          <div className={styles.map}></div>
        </>
      )}
    </>
  );
};

export default Contact;
