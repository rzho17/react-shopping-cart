import styles from "./ProductPage.module.css";
import Button from "../utils/Button";
import DeliveryInfo from "../utils/DeliveryInfo";

export default function ProductPage() {
  return (
    <div className={styles.productContainer}>
      <div className={styles.imgContainer}>
        <img src="../src/assets/react.svg" alt="" className={styles.mainImg} />
        <div className={styles.smallImgContainer}>
          <img src="../src/assets/react.svg" alt="" className={styles.img} />
          <img src="../src/assets/react.svg" alt="" className={styles.img} />
          <img src="../src/assets/react.svg" alt="" className={styles.img} />
          <img src="../src/assets/react.svg" alt="" className={styles.img} />
        </div>
      </div>

      <div className={styles.infoContainer}>
        <h2>STAR WARS SHORT SLEEVE UT</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis at
          veniam accusamus aspernatur magni eos numquam, obcaecati hic
          laboriosam. Quibusdam laudantium iste, quis fugit facere possimus
          porro unde optio soluta.
        </p>

        <h3>$29.99</h3>
        <div className={styles.quantityContainer}>
          <Button text={"-"} name={styles.qtnBtn} />
          <div>1</div>
          <Button text={"+"} name={styles.qtnBtn} />
        </div>

        <Button text={"Add to Cart"} name={styles.add} />

        <div className={styles.shippingInfo}>
          <DeliveryInfo
            containerName={styles.deliveryContainer}
            title={"Free Delivery"}
            text={"Enter your Postal code for Delivery Availability"}
          />
          <DeliveryInfo
            containerName={styles.deliveryContainer}
            title={"Return Delivery"}
            text={"Free 30 day Delivery Return"}
          />
        </div>
      </div>
    </div>
  );
}
