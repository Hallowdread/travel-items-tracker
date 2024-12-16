import PropTypes from "prop-types";

const Stats = ({ itemArr }) => {
  //
  if (!itemArr.length)
    return (
      <p className="stats">
        <em>Start adding some items to your list 🚀</em>
      </p>
    );
  //
  const addedItems = itemArr.length;
  const packedItems = itemArr.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / addedItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You've got everything!! Read to go ✈`
          : `💼You have ${addedItems} item(s) on your list, and you already packed
        ${packedItems} item(s)(${percentage}%)`}
      </em>
    </footer>
  );
};
//* Props Validation
Stats.propTypes = {
  itemArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
};

export default Stats;
