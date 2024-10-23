import styles from "./Cart.module.css";
import QuantityBtn from "../utils/QuantityBtn";
import Button from "../utils/Button";
import CartItems from "../utils/CartItems";
import SideScroller from "../utils/SideScroller";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default function Cart() {
  const [cartList, setCartList] = useOutletContext();
  const [total, setTotal] = useState(0);

  // adds all the prices of the cart items to a total cost
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
    <>
      <div className={styles.cartPage}>
        <h2>your cart</h2>

        {screen.width > 768 && (
          <div className={styles.title}>
            <p>ITEM</p>
            <p>NAME</p>
            <p>QUANTITY</p>
            <p>PRICE</p>
            <p></p>
          </div>
        )}

        {/* displays all the items in the cart */}
        <CartItems cartList={cartList} setCartList={setCartList} />

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
      <SideScroller text="free delivery" text2="over $99 " />
    </>
  );
}
