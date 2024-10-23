import PropTypes from "prop-types";

export default function Button({ func, text, name }) {
  return (
    <button onClick={func} className={name}>
      {text}
    </button>
  );
}

Button.propTypes = {
  func: PropTypes.func,
  text: PropTypes.string,
  name: PropTypes.string,
};
