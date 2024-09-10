import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"
import { Typewriter } from 'react-simple-typewriter';

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Shelby</h1>
            <p className={styles.description}>I am a<span>
							<Typewriter words={[' Software Engineer.', ' creative problem solver.', ' Machine Learning Engineer.', 'n AI enthusiast.', ' Full Stack Developer.']} loop={0} cursor cursorStyle='_' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
						</span></p>
            <div className={styles.buttons}>
                <a href={getImageUrl("files/resume-shelby-myrman.pdf")} target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>Resume</a> {/*TODO: Add resume download*/}
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
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="cartoon hero image of woman coding" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
}