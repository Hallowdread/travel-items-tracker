import PropTypes from "prop-types";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 3, packed: false },
// ];

const PackingList = ({ itemArr, onDeleteItem }) => {
  return (
    <div className="list">
      <ul>
        {itemArr.map((item) => (
          <List key={item.id} itemObj={item} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
};
//* Props Validation For PackingList Component
PackingList.propTypes = {
  itemArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

//? List Component
const List = ({ itemObj, onDeleteItem }) => {
  return (
    <li>
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button onClick={() => onDeleteItem(itemObj.id)}>❌</button>
    </li>
  );
};
//* Props Validation for List
List.propTypes = {
  itemObj: PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    packed: PropTypes.bool,
    onDeleteItem: PropTypes.func,
  }).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

export default PackingList;
