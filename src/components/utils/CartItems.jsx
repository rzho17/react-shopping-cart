import QuantityBtn from "./QuantityBtn";
import styles from "../content/Cart.module.css";
import Button from "./Button";

export default function CartItems({ cartList, setCartList }) {
  console.log("the current cart " + cartList);

  // need state to remove cartlist
  const remove = (id) => {
    setCartList((list) => {
      return list.filter((item) => item.id != id);
    });
  };

  return (
    // <div className={styles.cartContainer}>
    //   <img src={cartList.img} alt="" />
    //   <h3>{cartList.name}</h3>
    //   <QuantityBtn name={styles.qtnBtn} />
    //   <p>${cartList.price}</p>

    //   <Button name={styles.remove} text={"✕"}></Button>
    // </div>

    cartList.map((item) => {
      return (
        <div className={styles.cartContainer} key={item.id}>
          <img src={item.img} alt="" />
          <h3>{item.name}</h3>
          <div className={styles.qtnBtn}>&#215;{item.quantity}</div>
          {/* <QuantityBtn name={styles.qtnBtn} /> */}
          <p>${item.price * item.quantity}</p>

          <Button
            name={styles.remove}
            text={"✕"}
            func={() => remove(item.id)}
          ></Button>
        </div>
      );
    })
    // <div className={styles.cartContainer}>
    //   <img src="../src/assets/react.svg" alt="" />
    //   <h3>Kaiju No 8 UT Shirt</h3>
    //   <QuantityBtn name={styles.qtnBtn} />
    //   <p>$29.99</p>

    //   <Button name={styles.remove} text={"✕"}></Button>
    // </div>
  );
}
