export default function DeliveryInfo({ containerName, title, text }) {
  return (
    <div className={containerName}>
      <div>
        <img src="../src/assets/react.svg" alt="" />
        <h4>{title}</h4>
      </div>
      <p>{text}</p>
    </div>
  );
}
