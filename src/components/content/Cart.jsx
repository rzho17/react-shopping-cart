import styles from "./Cart.module.css";
import QuantityBtn from "../utils/QuantityBtn";
import Button from "../utils/Button";
import CartItems from "../utils/CartItems";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Cart() {
  const [cartList, setCartList] = useOutletContext();

  console.log(cartList);

  return (
    <div className={styles.cartPage}>
      <h2>Your Cart</h2>

      {screen.width > 768 && (
        // <tr>

        // </tr>
        <div className={styles.title}>
          <p>ITEM</p>
          <p>PRICE</p>
          <p>QUANTITY</p>
          <p>TOTAL</p>
        </div>
      )}

      <CartItems cartList={cartList} />

      {/* <div className={styles.cartContainer}>
        <img src="../src/assets/react.svg" alt="" />
        <h3>Kaiju No 8 UT Shirt</h3>
        <QuantityBtn name={styles.qtnBtn} />
        <p>$29.99</p>

        <Button name={styles.remove} text={"✕"}></Button>
      </div> */}

      <div className={styles.checkoutContainer}>
        <div className={styles.checkoutInfo}>
          <h5>Subtotal</h5>
          <p className={styles.price}>$29.99</p>
          <p className={styles.disclaimer}>
            Shipping and taxes computed at checkout
          </p>
        </div>
        <Button name={styles.checkOut} text={"Checkout"}></Button>
      </div>
    </div>
  );
}
