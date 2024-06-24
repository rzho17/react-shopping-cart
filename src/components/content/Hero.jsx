import styles from "./Hero.module.css";
import Button from "../utils/Button";

export default function Hero({
  divName,
  img,
  topText,
  bottomText,
  hasBtn = false,
}) {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles[divName]}`}>
        <img
          //   src="./src/assets/clarisse-meyer-hero.jpg"
          src={`./src/assets/${img}`}
          //   src=`./src/assets/${img}`
          alt=""
          className={styles.heroImg}
        />
        <div className={styles.heroTitle}>
          <h2 className={styles.top}>{topText}</h2>
          <h2 className={styles.bot}>{bottomText}</h2>
          {hasBtn ? <Button text={"Shop Now"} /> : null}
        </div>
      </div>
    </section>
  );
}
