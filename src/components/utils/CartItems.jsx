import styles from "../content/Cart.module.css";
import Button from "./Button";

export default function CartItems({ cartList, setCartList }) {
  console.log("the current cart " + cartList);

  const remove = (id) => {
    setCartList((list) => {
      return list.filter((item) => item.id != id);
    });
  };

  return cartList.map((item) => {
    return (
      <div className={styles.cartContainer} key={item.id}>
        <img src={item.img} alt="" />
        <h3>{item.name}</h3>
        <div className={styles.qtnBtn}>&#215;{item.quantity}</div>
        <p>${item.price * item.quantity}</p>

        <Button
          name={styles.remove}
          text={"✕"}
          func={() => remove(item.id)}
        ></Button>
      </div>
    );
  });
}
