import React from "react";
import styles from "../styles/Footer.module.scss";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <a></a>
        <a></a>
        <a></a>
        <a></a>
        <a></a>
        <a
          href="https://github.com/ShayanShadpour"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={42} />
        </a>
        <a
          href="https://www.linkedin.com/in/shadpour/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size={42} />
        </a>
        <a></a>
        <a></a>
        <a></a>
        <a></a>
        <a></a>
      </footer>
    </div>
  );
};

export default Footer;
