import ProductGallery from "../content/ProductGallery";
import styles from "./Kids.module.css";

export default function Kids() {
  return (
    <>
      <ProductGallery dataType={"kids"} name={styles.kids} />
    </>
  );
}
