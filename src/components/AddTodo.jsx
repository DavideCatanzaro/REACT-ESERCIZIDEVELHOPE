import React, { useState } from "react";

function AddTodo() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = (event) => {
    event.preventDefault();
    const newItemValue = event.target.itemInput.value;
    setItems([...items, newItemValue]);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInput}
          name="itemInput"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddTodo;