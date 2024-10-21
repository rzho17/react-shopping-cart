import ProductGallery from "../content/ProductGallery";
import styles from "./All.module.css";

export default function Men() {
  return (
    <>
      <ProductGallery dataType="twelfths" name={styles.twelfths} />
    </>
  );
}
