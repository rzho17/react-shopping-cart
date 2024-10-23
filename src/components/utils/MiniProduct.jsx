import styles from "./MiniProduct.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
      <img src={img} alt="" onClick={func} />
      <div className={styles.productInfo}>
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </Link>
  );
}

MiniProduct.propTypes = {
  func: PropTypes.func,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  container: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
};
