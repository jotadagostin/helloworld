import MenuLink from "../MenuLink";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegation}>
        <MenuLink to="/">Start</MenuLink>
        <MenuLink to="/aboutme">About Me</MenuLink>
      </nav>
    </header>
  );
}
