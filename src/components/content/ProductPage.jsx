import styles from "./ProductPage.module.css";
import Button from "../utils/Button";
import DeliveryInfo from "../utils/DeliveryInfo";
import SideScroller from "../utils/SideScroller";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import { useLocation, useOutletContext } from "react-router-dom";
import { useState } from "react";

export default function ProductPage() {
  const location = useLocation();
  const { item, img, name, price, func } = location.state || {};

  const changeImg = (src, name) => {
    console.log(name);
    const img = document.querySelector(`.${styles.mainImg}`);
    const smallImg = document.querySelector(`.${name}`);
    const temp = img.src;
    smallImg.src = temp;
    img.src = src;
  };

  const [itemQuantity, setItemQuantity] = useState(1);

  const incQuantity = () => {
    setItemQuantity((item) => item + 1);
  };

  const decQuantity = () => {
    setItemQuantity((item) => {
      return item > 1 ? item - 1 : item - 0;
    });
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const limit = 200;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const [cartList, setCartList] = useOutletContext();

  const addCart = () => {
    const obj = {
      id: item["web-scraper-order"],
      name: item.name,
      img: item.mainImg,
      price: item.price,
      quantity: itemQuantity,
    };

    // setcartlist
    // loop through cart items
    // if the id of an item matches obj quantity
    // update that items quantity
    // if id is not found, we know its a new item
    // add it the cart
    setCartList((prevCart) => {
      let itemExists = false;
      const updatedCart = prevCart.map((cartItem) => {
        if (cartItem.id == obj.id) {
          itemExists = true;
          return { ...cartItem, quantity: itemQuantity };
        }
        return cartItem;
      });

      if (!itemExists) {
        return [...updatedCart, obj];
      }

      return updatedCart;
    });
  };
  return (
    <>
      <div className={styles.productContainer}>
        <div className={styles.imgContainer}>
          <img src={item.mainImg} alt="" className={styles.mainImg} />
          <div className={styles.smallImgContainer}>
            <img
              src={item.subImg1}
              alt=""
              className={`${styles.img} img1`}
              onClick={(evt) => changeImg(evt.target.src, "img1")}
            />
            <img
              src={item.subImg2}
              alt=""
              className={`${styles.img} img2`}
              onClick={(evt) => changeImg(evt.target.src, "img2")}
            />
            <img
              src={item.subImg3}
              alt=""
              className={`${styles.img} img3`}
              onClick={(evt) => changeImg(evt.target.src, "img3")}
            />
            <img
              src={item.subImg4}
              alt=""
              className={`${styles.img} img4`}
              onClick={(evt) => changeImg(evt.target.src, "img4")}
            />
          </div>
        </div>

        <div className={styles.infoContainer}>
          <h2>{item.name}</h2>

          <p>
            {isExpanded
              ? item.description
              : `${item.description.slice(0, limit)}...`}
          </p>
          {item.description.length > limit && (
            <Button
              func={toggleReadMore}
              text={isExpanded ? "less info" : "more info"}
              name={styles.read}
            ></Button>
          )}

          <h3>{item.price}</h3>
          <div className={styles.quantityContainer}>
            <Button text={"-"} name={styles.qtnBtn} func={decQuantity} />
            <div>{itemQuantity}</div>
            <Button text={"+"} name={styles.qtnBtn} func={incQuantity} />
          </div>

          <Button text={"add to cart"} name={styles.add} func={addCart} />

          <div className={styles.shippingInfo}>
            <DeliveryInfo
              containerName={styles.deliveryContainer}
              title={"Free Delivery"}
              text={"Enter your Postal code for Delivery Availability"}
              icon={TbTruckDelivery}
            />
            <DeliveryInfo
              containerName={styles.deliveryContainer}
              title={"Return Delivery"}
              text={"Free 30 day Delivery Return"}
              icon={TbTruckReturn}
            />
          </div>
        </div>
      </div>
      <SideScroller text="free delivery" text2="over $99 " />
    </>
  );
}
