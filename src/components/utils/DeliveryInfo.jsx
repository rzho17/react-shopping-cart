import styles from "../content/ProductPage.module.css";
export default function DeliveryInfo({
  containerName,
  title,
  text,
  icon: Icon,
}) {
  return (
    <div className={containerName}>
      <div>
        {/* <TbTruckDelivery className={styles.icon} /> */}
        {/* <TbTruckReturn className={styles.icon} /> */}

        <Icon className={styles.icon} />

        {/* <img src="../src/assets/react.svg" alt="" /> */}
        <h4>{title}</h4>
      </div>
      <p>{text}</p>
    </div>
  );
}
