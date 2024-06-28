export default function Button({ func, text, name }) {
  return (
    <button onClick={func} className={name}>
      {text}
    </button>
  );
}
