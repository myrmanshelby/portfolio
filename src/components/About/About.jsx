import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"

export const About = () => {
    const [past, setPast] = useState(true);
    const [present, setPresent] = useState(false);
    const [future, setFuture] = useState(false);
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={`${styles.content} ${styles.darkContainer}`}>
        <img src={getImageUrl("about/aboutImage.png")} className={styles.aboutImg}/>
            <div className={styles.rightContent}>
                <div className={styles.btnContainer}>
                    <button 
                        className={`${past ? styles.activeBtn : ""}`}
                        onClick={()=> {
                            setPast(true);
                            setPresent(false);
                            setFuture(false);
                    }}>Past</button>
                    <button 
                        className={`${present ? styles.activeBtn : ""}`}
                        onClick={() => {
                                setPast(false);
                                setPresent(true);
                                setFuture(false);
                            }}>Present</button>
                    <button
                        className={`${future ? styles.activeBtn : ""}`} 
                        onClick={() => {
                            setPast(false);
                            setPresent(false);
                            setFuture(true);
                        }}>Future</button>
                </div>
                {past && (
                    <div className={styles.textContent}><p>When I was ten years old, my dad handed me the book <em>Practical Poker Math</em> to prepare for our family’s first annual Thanksgiving poker tournament. After taking home the $30 grand prize, my lifelong love for numbers and logic was born.</p>
                    <p>Alongside numbers, I’ve always had a passion for storytelling. After double majoring in Economics and Statistics, I started my career in marketing, where I sharpened my communication, analysis, and project management skills.</p>
                    <p>But something was missing: math. To satisfy this missing piece, I began reading everything I could about computer science. I dove deep into algorithms and took on personal projects, refining my programming skills and reigniting my passion for problem-solving.</p></div>
                )}
                {present && (
                    <div className={`${present && styles.presentText} ${styles.textContent}`}>
                        <p>After years of self-study, I’m now pursuing my Master’s in Computer Science at UCSD, with a focus on Artificial Intelligence. My coursework spans theory, systems, and applications, including classes like Probabilistic Reasoning for AI, Recommender Systems and Web Mining, and Advanced Algorithms.</p>
                        <p>Outside of class, I'm constantly working on personal projects. My current obsession? A Learning Management System that enables teachers to upload problem sets, uses LLMs to tutor students, and provides feedback to help teachers tailor instruction to individual learning styles. Check out the source code <a href="https://github.com/myrmanshelby/learning-management-system" target="_blank" rel="noopener noreferrer">here</a>.</p>
                    </div>
                )}
                {future && (
                    <div className={`${future && styles.futureText} ${styles.textContent}`}>
                        <p>The past three years have shown me that data, technology, and storytelling are deeply intertwined. In the future, I’m excited to merge these passions as a full-stack engineer, data scientist, or in any role that aligns with my skills.</p>
                        <p>Though my journey into tech didn’t follow a traditional path, each step – marketing, self-learning, and my Master’s – has shaped me into a strong communicator and adept problem solver. I’m eager to apply my unique blend of technical and soft skills to the impactful, meaningful projects that lie ahead.</p>
                    </div>
                )}
            </div>
        </div>
    </section> 
}
/*TODO: Add source code in present section */