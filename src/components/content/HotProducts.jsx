import styles from "./HotProducts.module.css";
import MiniProduct from "../utils/MiniProduct";
import Button from "../utils/Button";
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

export default function HotProducts() {
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // setLoading(true);
        const data = await fetch("/data/unisex_data.json");

        const allData = await data.json();
        //   console.log(allData);
        setProductData(allData);
        console.log("Data fetched:", allData);

        // setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  //   console.log(productData);

  //   if (setLoading) {
  //     return <div>Loading</div>;
  //   }

  return (
    <section className={styles.hotItemSection}>
      <h2>Hot Arrivals</h2>
      <div className={styles.productContainer}>
        {loading === false ? (
          productData.slice(0, 8).map((item) => {
            return (
              <MiniProduct
                key={item.id}
                img={item.mainImg}
                name={item.name}
                price={item.price}
                item={item}
              />
            );
          })
        ) : (
          <div>Loading Products</div>
        )}
      </div>
      <Button text={"See All"} />
    </section>
  );
}
