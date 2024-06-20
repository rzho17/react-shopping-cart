import styles from "./HotProducts.module.css";
import MiniProduct from "../utils/MiniProduct";

export default function HotProducts() {
  return (
    <section>
      <h1>Hot Arrivals</h1>
      <div className={styles.productContainer}>
        <MiniProduct />
        <MiniProduct />
        <MiniProduct />
        <MiniProduct />
        {/* <div className={styles.product}>
          <img src="../src/assets/react.svg" alt="" />
          <div className={styles.productInfo}>
            <p>5 stars</p>
            <p>9.99</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
