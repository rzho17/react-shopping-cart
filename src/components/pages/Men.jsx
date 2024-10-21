import ProductGallery from "../content/ProductGallery";
import styles from "./Men.module.css";

export default function Men() {
  return (
    <>
      <ProductGallery dataType="mens" name={styles.men} />
    </>
  );
}
