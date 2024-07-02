import styles from "./Cart.module.css";
import QuantityBtn from "../utils/QuantityBtn";

export default function Cart() {
  return (
    <div>
      <h2>Your Cart</h2>

      {screen.width > 768 && (
        <div>
          <p>ITEM</p>
          <p>PRICE</p>
          <p>QUANTITY</p>
          <p>TOTAL</p>
        </div>
      )}
      <div className={styles.cartContainer}>
        <img src="../src/assets/react.svg" alt="" />
        <h3>Kaiju No 8 UT Shirt</h3>
        <QuantityBtn />
        <p>29.99</p>
        <button>remove item</button>
      </div>
    </div>
  );
}
