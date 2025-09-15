/* eslint-disable @next/next/no-img-element */
import React, { Suspense } from "react";
import styles from "./index.scss";
import ButtonContainer from "../ButtonContainer";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
const Footer = () => {
  return (
    <Suspense fallback={<></>}>
      <footer className={`footer dark:bg-accent`}>
        <div className="footerContainer" style={{ flex: "2" }}>
          <span className="dark:text-foreground">ABOUT THE PROVIDER</span>
          <span className={`${styles.aboutText} dark:text-accent-foreground`}>
            LUCID IT SOLUTIONS is an IT Business Consulting Firm with a goal of
            providing the right end-to-end business solution to our clients.
          </span>
          <a href="https://luciditsolutions.com/" target="_blank">
            Learn more...
          </a>
        </div>
        <div className="footerContainer">
          <span className="dark:text-foreground">LINKS</span>
          <a href="#">Terms of Services</a>
          <a href="#">Privacy Policy</a>
          <a href="#">BIR WIthholding Tax</a>
          <a href="#">Social Security System</a>
          <a href="#">Phil Health</a>
        </div>
        <div className="footerContainer" style={{ flex: "1.2" }}>
          <span className="dark:text-foreground">GET IN TOUCH</span>
          <span className={`dark:text-accent-foreground`}>
            For concerns or issues, contact us at
          </span>
          <div className="iconThenText">
            <FaEnvelope />
            <span className="dark:text-foreground">
              info@luciditsolution.com
            </span>
          </div>
          <div className="iconThenText">
            <FaPhoneAlt />
            <span className="dark:text-foreground">+632 8571 2262</span>
          </div>
          <ButtonContainer style={{ justifyContent: "flex-start" }}>
            <span className="iconLink">
              <FaFacebookF fill="white" />
            </span>
            <span className="iconLink">
              <FaTwitter fill="white" />
            </span>
            <span className="iconLink">
              <FaLinkedinIn fill="white" />
            </span>
          </ButtonContainer>
        </div>
        <div className="address" style={{ flex: "1.3" }}>
          <span className={`dark:text-accent-foreground`}>
            © 2017 PAYplusESS. All Rights Reserved.
          </span>
          <span className={`dark:text-accent-foreground`}>Version 7.2.086</span>
          <span className={`dark:text-accent-foreground`}>
            Designed by{" "}
            <p className="text-secondary dark:text-foreground">
              LUCID I.T. SOLUTIONS
            </p>
          </span>
        </div>
      </footer>
    </Suspense>
  );
};

export default Footer;
