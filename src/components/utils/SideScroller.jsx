import styles from "./SideScroller.module.css";
import PropTypes from "prop-types";

export default function SideScroller({ text, text2 }) {
  return (
    <div className={styles.sideScroll}>
      <h3>
        <span className={styles.main}>
          {" "}
          &#8226; {text} <span className={styles.sub}>{text2}</span>{" "}
        </span>
        <span className={styles.main}>
          {" "}
          &#8226; {text} <span className={styles.sub}>{text2}</span>{" "}
        </span>
        <span className={styles.main}>
          {" "}
          &#8226; {text} <span className={styles.sub}>{text2}</span>{" "}
        </span>
        <span className={styles.main}>
          {" "}
          &#8226; {text} <span className={styles.sub}>{text2}</span>{" "}
        </span>
        <span className={styles.main}>
          {" "}
          &#8226; {text} <span className={styles.sub}>{text2}</span>{" "}
        </span>
        <span className={styles.main}>
          {" "}
          &#8226; {text} <span className={styles.sub}>{text2}</span>{" "}
        </span>
        <span className={styles.main}>
          {" "}
          &#8226; {text} <span className={styles.sub}>{text2}</span>{" "}
        </span>
        <span className={styles.main}>
          {" "}
          &#8226; {text} <span className={styles.sub}>{text2}</span>{" "}
        </span>
      </h3>
    </div>
  );
}

SideScroller.propTypes = {
  text: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};
