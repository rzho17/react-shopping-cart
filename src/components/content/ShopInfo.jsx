import styles from "./ShopInfo.module.css";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
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
            src="../src/assets/pexels-2.jpg"
            alt="man running away from camera on beach"
            className={styles.img}
          />
        </div>
        <div>
          <img
            src="../src/assets/pexels-1.jpg"
            alt="two hip people posing for camera"
            className={styles.img}
          />
        </div>
        <div>
          <img
            src="../src/assets/pexels-3.jpg"
            alt="girl with sun glasses sitting on ground posing for camera"
            className={styles.img}
          />
        </div>
        {width > 768 ? (
          <div className={styles.header}>
            <h2>elevate everyday</h2>
            <h2>with twelfth</h2>
          </div>
        ) : null}
        <div className={styles.infoContainer}>
          <h3>wear the change you want to see</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            eligendi repudiandae itaque, reiciendis quis iure pariatur. Rem
            totam inventore ipsa libero natus quam obcaecati sunt facilis nam
            voluptates? Rerum, pariatur?
          </p>
          <Link to="/all">
            <Button text="shop now" />
          </Link>
        </div>
      </div>
    </section>
  );
}
