import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Shelby</h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna.</p> {/*TODO: Add text or animation*/}
            <a href="#" className={styles.resumeBtn}>Resume</a> {/*TODO: Add other buttons and resume download*/}
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="cartoon hero image of woman coding" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
}