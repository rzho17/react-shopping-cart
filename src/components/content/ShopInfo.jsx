import styles from "./ShopInfo.module.css";
import Button from "../utils/Button";
import { useEffect, useState } from "react";

export default function ShopInfo() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
        <div className={styles.header}>
          <h2>Your Style</h2>
          <h2>Stay Modish</h2>
        </div>
        <div className={styles.infoContainer}>
          {width > 768 ? <h3>Never Before Tees</h3> : null}
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            eligendi repudiandae itaque, reiciendis quis iure pariatur. Rem
            totam inventore ipsa libero natus quam obcaecati sunt facilis nam
            voluptates? Rerum, pariatur?
          </p>
          <Button text="Shop Now" />
        </div>
      </div>
    </section>
  );
}
