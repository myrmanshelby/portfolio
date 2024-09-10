import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"

export const About = () => {
    return <section className={styles.container} id="about">
        <div className={styles.content}>
            <div>
                <h2 className={styles.title}>About</h2>
                <img src={getImageUrl("about/aboutImage.png")} alt="Woman facing computer screens typing" className={styles.aboutImg}/>
            </div>
            <div className={styles.rightContent}>
                <div className={styles.btnContainer}>
                    <button>Past</button>
                    <button>Present</button>
                    <button>Future</button>
                </div>
                <div className={styles.textContent}>
                    <p className={styles.pastText}>Lorem ipsum odor amet, consectetuer adipiscing elit. Ornare justo ante non; feugiat fusce varius? Faucibus vel penatibus mollis ligula sociosqu. Condimentum eget dignissim netus nullam eget. Mus congue mi vulputate semper ultricies. Potenti pretium aliquam fringilla fermentum finibus. Sociosqu sociosqu aliquet maximus hendrerit aliquet vulputate. Nisi magna blandit molestie ex, inceptos purus sit. Metus inceptos montes nulla suscipit ridiculus.</p>
                    <p className={styles.pastText}>Rhoncus congue lectus dis imperdiet parturient tincidunt dapibus iaculis vulputate. Aenean fringilla tincidunt in semper odio habitant tortor. Tincidunt ad malesuada amet consectetur fames habitant ultrices. Efficitur urna eu class sed accumsan dui vulputate nisi. Eu sed facilisis facilisis laoreet duis sodales parturient. Habitasse volutpat nostra curae ligula gravida aptent. Etiam etiam sed sollicitudin tempus fermentum maecenas neque nascetur. Potenti efficitur maximus blandit volutpat libero pellentesque. Etiam parturient augue duis ultrices semper congue nunc risus. Cubilia facilisi inceptos taciti quisque pretium massa congue commodo per.</p>
                    <p className={styles.pastText}>Per tempus vulputate luctus, ad malesuada sollicitudin laoreet aenean morbi. Bibendum posuere diam conubia facilisi sodales vitae vulputate sodales. Purus arcu fusce senectus habitant, sagittis posuere. Pulvinar tristique luctus mus; augue risus volutpat sollicitudin pulvinar. Placerat nisi maximus erat sed volutpat; lacinia tortor sem magna. Placerat tortor aliquet commodo posuere nec. Mattis suscipit torquent ultricies varius dapibus pharetra bibendum volutpat.</p>
                    <p className={styles.presentText}></p>
                    <p className={styles.futureText}></p>
                </div>
            </div>
        </div>
    </section> 
}

/* TODO: 
- make buttons work
- Add actual text (maybe as a json?)
- figure out sizing
*/