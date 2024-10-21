import styles from "./Cart.module.css";
import QuantityBtn from "../utils/QuantityBtn";
import Button from "../utils/Button";
import CartItems from "../utils/CartItems";
import { useState, useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";

export default function Cart() {
  const [cartList, setCartList] = useOutletContext();
  const [total, setTotal] = useState(0);

  console.log(cartList);

  useEffect(() => {
    if (cartList.length >= 1) {
      let tempTotal = cartList.reduce((acc, item) => {
        return acc + item.quantity * item.price;
      }, 0);
      setTotal(tempTotal);
    } else {
      setTotal(0);
    }
  }, [cartList]);

  return (
    <div className={styles.cartPage}>
      <h2>your cart</h2>

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

      <CartItems cartList={cartList} setCartList={setCartList} />

      {/* <div className={styles.cartContainer}>
        <img src="../src/assets/react.svg" alt="" />
        <h3>Kaiju No 8 UT Shirt</h3>
        <QuantityBtn name={styles.qtnBtn} />
        <p>$29.99</p>

        <Button name={styles.remove} text={"✕"}></Button>
      </div> */}

      <div className={styles.checkoutContainer}>
        <div className={styles.checkoutInfo}>
          <h5>SUBTOTAL</h5>
          <p className={styles.price}>${total}</p>
          <p className={styles.disclaimer}>
            Shipping and taxes computed at checkout
          </p>
        </div>
        <Button name={styles.checkOut} text={"checkout"}></Button>
      </div>
    </div>
  );
}
