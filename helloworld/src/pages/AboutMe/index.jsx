import styles from "./Aboutme.module.css";
import PostModel from "./components/PostModel";
import photoCover from "./assets/sobre_mim_capa.png";
import photoAboutMe from "./assets/sobre_mim_foto.png";

export default function AboutMe() {
  return (
    <PostModel 
        fotoCapa={photoCover}
        titulo="About me"
    >
        <h3 className={styles.subtitle}>
            Hello, My name is Antonio!
        </h3>

        <img 
            src={photoAboutMe} 
            alt="Photo about Antonio smiling"
            className={styles.photoAboutMe} 
            />
        <p className="styles.paragraph">
            Hey how's it going? I'm a Front-end instructor at Alura and I'm happy to see you here.
        </p>
        <p className="styles.paragraph">
            My history with programming began at the Federal Institute of Piauí (IFPI), when I attended high school integrated with the Computer Science course. I learned programming logic and the basics of several languages, such as PHP, Python, Java, but without going too deep into each one of them. I really enjoyed studying programming, but at the time I had no idea that I would work with it today.
        </p>
        <p className="styles.paragraph">
            In higher education, I chose to study Electrical Engineering at the Federal University of Piauí (UFPI). There I managed to enter the PET (Tutorial Education Program), an academic group that contributes in various ways to the course. There I had the opportunity to study web development to be one of their website maintainers.
        </p>
        <p className="styles.paragraph">
            With that I had my dev experience closer to reality, with implementation deadlines for the website, and I learned a lot while coding.
        </p>
        <p className="styles.paragraph">
            
        </p>

    </PostModel>
  )
}
