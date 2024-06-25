import styles from "./MiniProduct.module.css";

export default function MiniProduct({ func, img, name, price }) {
  return (
    <div className={styles.product}>
      {/* <img src="../src/assets/react.svg" alt="" onClick={func} /> */}
      <img src={img} alt="" onClick={func} />
      <div className={styles.productInfo}>
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}