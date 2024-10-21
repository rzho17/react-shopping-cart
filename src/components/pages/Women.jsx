import ProductGallery from "../content/ProductGallery";
import styles from "./Women.module.css";

export default function Women() {
  return (
    <>
      <ProductGallery dataType={"womens"} name={styles.women} />
    </>
  );
}
