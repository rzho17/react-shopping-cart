import styles from "./ProductGallery.module.css";
import MiniProduct from "../utils/MiniProduct";
import SideScroller from "../utils/SideScroller";
import { useState, useEffect } from "react";

export default function ProductGallery({ dataType, name }) {
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // setLoading(true);
        const data = await fetch(`./data/${dataType}_data.json`);
        // const data = await fetch("./data/mens_data.json");

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
  return (
    <>
      <div className={`${name} ${styles.productGallery}`}>
        <h2>{dataType}</h2>

        <div className={styles.galleryContainer}>
          {loading === false ? (
            productData.map((item) => {
              return (
                <MiniProduct
                  key={item["web-scraper-order"]}
                  img={item.mainImg}
                  name={item.name.slice(0, 17)}
                  price={item.price}
                  container={styles.galleryProduct}
                  item={item}
                />
              );
            })
          ) : (
            <div>Loading Products</div>
          )}
          {/* <MiniProduct
          img={productData.mainImg}
          name={productData.name}
          price={productData.price}
        /> */}
        </div>
      </div>
      <SideScroller text="free delivery" text2="over $99 " />
    </>
  );
}
