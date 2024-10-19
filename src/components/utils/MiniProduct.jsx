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
    // creates mini product gallery
    <Link
      to="product"
      className={`${styles.product} ${container}`}
      // holds state when clicking on the product to the product page
      state={{ item, img, name, price, func }}
    >
      {/* <img src="../src/assets/react.svg" alt="" onClick={func} /> */}
      {/* <img src={item.mainImg} alt="" onClick={func} /> */}
      <img src={img} alt="" onClick={func} />
      <div className={styles.productInfo}>
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </Link>
  );
}
