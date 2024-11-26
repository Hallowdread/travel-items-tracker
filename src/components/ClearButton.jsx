import PropTypes from "prop-types";

export default function ClearButton({ onClearItems }) {
  return (
    <div className="clear-btn">
      <button onClick={() => onClearItems()}>Clear</button>
    </div>
  );
}
//* Props Validation
ClearButton.propTypes = {
  onClearItems: PropTypes.func.isRequired,
};
