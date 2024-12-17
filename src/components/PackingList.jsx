import PropTypes from "prop-types";
import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 3, packed: false },
// ];

const PackingList = ({
  itemArr,
  onDeleteItem,
  onToggleItems,
  onClearItems,
}) => {
  //? Sort State
  const [sortBy, setSortBy] = useState("input");
  // console.log(sortBy);
  //
  let sortedItems;
  //
  if (sortBy === "input") {
    sortedItems = itemArr;
  }
  //
  if (sortBy === "description") {
    sortedItems = itemArr
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  //
  if (sortBy === "packed") {
    sortedItems = itemArr
      .slice()
      .sort((a, b) => (a.packed ? 1 : 0) - (b.packed ? 1 : 0));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <List
            key={item.id}
            itemObj={item}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input Order</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed Status</option>
        </select>
        <button onClick={() => onClearItems()}>Clear</button>
      </div>
    </div>
  );
};
//* Props Validation
PackingList.propTypes = {
  itemArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onToggleItems: PropTypes.func.isRequired,
  onClearItems: PropTypes.func.isRequired,
};

//? List Component
const List = ({ itemObj, onDeleteItem, onToggleItems }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={itemObj.packed}
        onChange={() => onToggleItems(itemObj.id)}
      />
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button onClick={() => onDeleteItem(itemObj.id)}>❌</button>
    </li>
  );
};
//* Props Validation
List.propTypes = {
  itemObj: PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    packed: PropTypes.bool,
    onDeleteItem: PropTypes.func,
  }).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onToggleItems: PropTypes.func.isRequired,
};

export default PackingList;
