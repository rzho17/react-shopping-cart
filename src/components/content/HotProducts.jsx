import styles from "./HotProducts.module.css";
import MiniProduct from "../utils/MiniProduct";
import Button from "../utils/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HotProducts() {
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);

  // fetches data for loading page info
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("/data/signatures_data.json");

        const allData = await data.json();
        setProductData(allData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={styles.hotItemSection}>
      <div className={styles.h2Container}>
        <h2>
          new arrivals &#8226; new arrivals &#8226; new arrivals &#8226; new
          arrivals &#8226; new arrivals &#8226; new arrivals &#8226; new
          arrivals &#8226; new arrivals &#8226; new arrivals &#8226; new
          arrivals &#8226; new arrivals &#8226; new arrivals &#8226;
        </h2>
      </div>
      <div className={styles.productContainer}>
        {loading === false ? (
          productData.slice(0, 8).map((item) => {
            return (
              <MiniProduct
                key={item["web-scraper-order"]}
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
      <Link to="/signature">
        <Button text={"see all"} />
      </Link>
    </section>
  );
}
