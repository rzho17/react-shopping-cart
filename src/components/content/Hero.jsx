import styles from "./Hero.module.css";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
          src={`/data/assets/${img}`}
          alt="hero section img"
          className={styles.heroImg}
        />
        <div className={styles.heroTitle}>
          <h2 className={styles.top}>{topText}</h2>
          <h2 className={styles.bot}>{bottomText}</h2>
          {hasBtn ? (
            <Link to="/all">
              <Button text={"shop now"} />
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  divName: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string,
  hasBtn: PropTypes.bool,
};
