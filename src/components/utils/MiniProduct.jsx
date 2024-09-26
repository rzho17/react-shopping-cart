import styles from "./MiniProduct.module.css";
import { Link, Routes, Route } from "react-router-dom";
import ProductPage from "../content/ProductPage";

export default function MiniProduct({
  func,
  img,
  name,
  price,
  container,
  item,
}) {
  return (
    <Link
      to="product"
      className={`${styles.product} ${container}`}
      //   state={{ img, name, price, func }}
      state={{ item, img, name, price, func }}
    >
      {/* <img src="../src/assets/react.svg" alt="" onClick={func} /> */}
      {/* <img src={item.mainImg} alt="" onClick={func} /> */}
      <img src={img} alt="" onClick={func} />
      <div className={styles.productInfo}>
        <p>{name}</p>
        <p>${price}9</p>
      </div>
    </Link>
  );
}
