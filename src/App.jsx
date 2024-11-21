import PropTypes from "prop-types";
import "./index.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 3, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
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
const Form = () => {
  return (
    <form className="add-form">
      <h3>What do you need for your😍trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Items..." />
    </form>
  );
};

//? PackingList Component
const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <List key={item.id} itemObj={item} />
        ))}
      </ul>
    </div>
  );
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
    id: PropTypes.number.string.isRequired,
    quantity: PropTypes.number.isRequired,
    packed: PropTypes.bool,
  }).isRequired,
};
