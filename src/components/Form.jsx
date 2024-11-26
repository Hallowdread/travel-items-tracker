import PropTypes from "prop-types";
import { useState } from "react";

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
//* Props Validation
Form.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};

export default Form;
