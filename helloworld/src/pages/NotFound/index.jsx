import styles from "./NotFound.module.css";
import erro404 from "assets/erro_404.png";
import MainButton from "components/MainButton";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navegation = useNavigate();

    return (
        <>
            <div className={styles.contentContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.title}>
                    Ops! Page not found.
                </h1>
                <p className={styles.paragraph}>
                    Are you sure that`s what are you looking for?
                </p>
                <p className={styles.paragraph}>
                    Hold on a second and load the page or come back to the first page.
                </p>

                <div 
                className={styles.buttonContainer}
                onClick={() => navegar(-1)}
                >
                    <MainButton size="lg">
                        Back
                    </MainButton>
            

                </div>

                <img 
                className={styles.imageDog}  
                src={erro404} 
                alt="A dog wearing glasses dressed like human" />

            </div>
            <div className={styles.whiteSpace}></div>
        </>
    )
}
