import ProductGallery from "../content/ProductGallery";
import styles from "./Signature.module.css";

export default function Men() {
  return (
    <>
      <ProductGallery dataType="signatures" name={styles.signature} />
    </>
  );
}
