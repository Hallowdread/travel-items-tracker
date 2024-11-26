import "./index.css";
import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import ClearButton from "./components/ClearButton";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export default function App() {
  const [items, setItems] = useState([]);

  //? for the Form component
  function handleItems(item) {
    setItems((items) => [...items, item]);
  }
  //? For the PackingList component
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  //? For the PackingList component
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  //? For the ClearButton component
  function handleClearItems() {
    setItems([]);
  }
  //
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleItems} />
      <ClearButton onClearItems={handleClearItems} />
      <PackingList
        itemArr={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
      />
      <Stats />
    </div>
  );
}
