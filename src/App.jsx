import PropTypes from "prop-types";
import "./index.css";
import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 3, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  //
  function handleItems(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleItems} />
      <PackingList itemArr={items} />
      <Stats />
    </div>
  );
}

//? List Component
const Logo = () => {
  return (
    <header>
      <h1>🌴FAR AWAY💼</h1>
    </header>
  );
};

//? Form Component
const Form = ({ onAddItem }) => {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  // console.log(quantity, description);
  //
  function handleSubmit(e) {
    e.preventDefault();
    //
    const newItems = {
      id: Date.now(),
      description,
      quantity,
      package: false,
    };
    //
    onAddItem(newItems);
    // console.log(newItems);
    //
    setQuantity(1);
    setDescription("");
  }
  return (
    <form className="add-form">
      <h3>What do you need for your😍trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
};
//* Props Validation for From Component
Form.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};

//? PackingList Component
const PackingList = ({ itemArr }) => {
  return (
    <div className="list">
      <ul>
        {itemArr.map((item) => (
          <List key={item.id} itemObj={item} />
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
};

//? List Component
const List = ({ itemObj }) => {
  return (
    <li>
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button>❌</button>
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
  }).isRequired,
};

//? Stats Component
const Stats = () => {
  return (
    <footer className="stats">
      <em>💼You have X items on your list, and you already packed X(X%)</em>
    </footer>
  );
};
