import QuantityBtn from "./QuantityBtn";
import styles from "../content/Cart.module.css";
import Button from "./Button";

export default function CartItems() {
  return (
    <div className={styles.cartContainer}>
      <img src="../src/assets/react.svg" alt="" />
      <h3>Kaiju No 8 UT Shirt</h3>
      <QuantityBtn name={styles.qtnBtn} />
      <p>$29.99</p>

      <Button name={styles.remove} text={"✕"}></Button>
    </div>
  );
}
