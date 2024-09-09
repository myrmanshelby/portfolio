import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json"

export const Skills = () => {
    return <section className={styles.container} id="skills">
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.skills}>{
            skills.map((skill, id) => {
                return <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}><img src={getImageUrl(skill.imageSrc)} alt={skill.title}/></div>
                        <p>{skill.title}</p>
                    </div>
                }
            )} 
        </div>
    </section>
}

/* TODO: Add spinning animation to skill images */