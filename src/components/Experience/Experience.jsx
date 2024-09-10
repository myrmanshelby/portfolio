import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";
import experience from "../../data/experience.json"

export const Experience = () => {
    return <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <ul className={styles.experience}>
          {experience.map((item, id) => {
            return (
              <li key={id} className={styles.item}>
                <img
                  src={getImageUrl(item.imageSrc)}
                  alt={`${item.organization} Logo`}
                />
                <div className={styles.itemDetails}>
                  <h3>{`${item.role}, ${item.organisation}`}</h3>
                  <p>{`${item.startDate} - ${item.endDate}`}</p>
                  <ul>
                    {item.experiences.map((bullet, id) => {
                      return <li key={id}>{bullet}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
    </section>
}

/*TODO: make images clickable*/