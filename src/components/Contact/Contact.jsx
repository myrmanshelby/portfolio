import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Get in Touch</h2>
      </div>
      <div className={styles.buttons}>
        <a href="#" className={styles.resumeBtn}>Resume</a> {/*TODO: ADD RESUME DOWNLOAD*/}
        <div>
            <a href="mailto:smyrman@ucsd.edu" target="_blank" rel="noopener noreferrer">
                <img src={getImageUrl("social/emailIcon.png")} alt="Email icon" />
            </a>
            <a href="https://www.linkedin.com/in/shelby-myrman/" target="_blank" rel="noopener noreferrer">
                <img
                    src={getImageUrl("social/linkedinIcon.png")}
                    alt="LinkedIn icon"
                />
            </a>
            <a href="https://github.com/myrmanshelby" target="_blank" rel="noopener noreferrer">
                <img src={getImageUrl("social/githubIcon.png")} alt="Github icon" />
            </a>

        </div>
      </div>
    </footer>
  );
};