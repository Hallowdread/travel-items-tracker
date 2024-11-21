import "./index.css";

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
    </div>
  );
}

const Logo = () => {
  return (
    <header>
      <h1>🌴FAR AWAY💼</h1>
    </header>
  );
};

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
