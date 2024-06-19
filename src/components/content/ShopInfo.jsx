import styles from "./ShopInfo.module.css";

export default function ShopInfo() {
  return (
    <section className={styles.shopInfo}>
      <div className={styles.imgGrid}>
        <div>
          <img
            src="../src/assets/camera-guy.jpg"
            alt="guy point camera at user"
            className={styles.img}
          />
        </div>
        <div>
          <img
            src="../src/assets/hip-fashion.jpg"
            alt="hip fashion guy posing for camera"
            className={styles.img}
          />
        </div>
        <div>
          <img
            src="../src/assets/shirts.jpg"
            alt="rack of t-shirts"
            className={styles.img}
          />
        </div>
      </div>
      <div>
        <h2>Your Style</h2>
        <h2>Stay Modish</h2>
      </div>
    </section>
  );
}
