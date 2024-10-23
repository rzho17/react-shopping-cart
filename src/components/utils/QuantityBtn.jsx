import Button from "./Button";
import styles from "../content/ProductPage.module.css";
import PropTypes from "prop-types";

export default function QuantityBtn({ name }) {
  return (
    <div className={`${styles.quantityContainer} ${name}`}>
      <Button text={"-"} name={styles.qtnBtn} />
      <div>1</div>
      <Button text={"+"} name={styles.qtnBtn} />
    </div>
  );
}

QuantityBtn.propTypes = {
  name: PropTypes.string.isRequired,
};
