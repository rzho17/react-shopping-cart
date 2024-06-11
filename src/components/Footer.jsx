import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div>
        <h3>About ModishTee</h3>
        <h3>Help</h3>
        <h3>Account</h3>
        <h3>E-Newsletter</h3>
      </div>
      <div className={styles.lower}>
        <h2 className={styles.header}>ModishTee</h2>
        <div className={styles.socials}>
          <img
            src="../src/assets/facebook.svg"
            alt="facebook icon"
            className={styles.icon}
          ></img>
          <img
            src="../src/assets/insta.svg"
            alt="instagram icon"
            className={styles.icon}
          ></img>
          <img
            src="../src/assets/twitter.svg"
            alt="twitter icon"
            className={styles.icon}
          ></img>
          <img
            src="../src/assets/youtube.svg"
            alt="youtube icon"
            className={styles.icon}
          ></img>
        </div>
      </div>
    </footer>
  );
}
