import styles from "./MiniProduct.module.css";

export default function MiniProduct({ func, img, rating, price }) {
  return (
    <div className={styles.product}>
      <img src="../src/assets/react.svg" alt="" />
      <div className={styles.productInfo}>
        <p>5 stars</p>
        <p>9.99</p>
      </div>
    </div>
  );
}
