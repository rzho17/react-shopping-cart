import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.hero}>
        <img
          src="./src/assets/clarisse-meyer-hero.jpg"
          alt=""
          className={styles.heroImg}
        />
        <div className={styles.heroTitle}>
          <h2 className={styles.top}>Wear</h2>
          <h2 className={styles.bot}>Modish</h2>
        </div>
      </div>
    </section>
  );
}
