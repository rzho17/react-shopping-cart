import styles from "../content/ProductPage.module.css";
import PropTypes from "prop-types";

export default function DeliveryInfo({
  containerName,
  title,
  text,
  icon: Icon,
}) {
  return (
    <div className={containerName}>
      <div>
        <Icon className={styles.icon} />

        <h4>{title}</h4>
      </div>
      <p>{text}</p>
    </div>
  );
}

DeliveryInfo.propTypes = {
  containerName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
