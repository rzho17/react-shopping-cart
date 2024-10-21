import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.info}>
        <h3>about us</h3>
        <h3>questions</h3>
        <h3>careers</h3>
        <h3>account</h3>
        <h3>e-newsletter</h3>
      </div>
      <div className={styles.lower}>
        <h2 className={styles.header}>twelfth</h2>
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
