import styles from "./Banner.module.css";
import colorfulCircle from "assets/circulo_colorido.png";
import myPicture from "assets/minha_foto.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.title}>Hello, World!</h1>
        <p className={styles.paragraph}>
          Welcome to my personal space! I'm Antônio Evaldo, Front-end instructor
          at Alura. Here I share a lot of knowledge, I hope you learn something
          new.
        </p>
      </div>

      <div className={styles.images}>
        <img
          src={colorfulCircle}
          alt=""
          className={styles.colorfulCircle}
          aria-hidden={true}
        />

        <img 
          src={myPicture} 
          alt="" 
          className={styles.myPicture} />
      </div>
    </div>
  );
}
