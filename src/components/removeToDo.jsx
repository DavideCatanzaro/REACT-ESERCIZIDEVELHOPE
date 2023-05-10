import React, { useState } from "react";

function RemoveTodo() {
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

  const handleReset = (event) => {
    event.preventDefault();
    setItems([]);
    setInputValue("");
  };

  const handleRemove = (id) => {
    const updatedItems = [...items];
    updatedItems.splice(id, 1);
    setItems(updatedItems);
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
          <>
            <li>{item}</li>
            <button type="click" onClick={handleRemove}>
              REMOVE
            </button>
          </>
        ))}
      </ul>
      <button type="click" onClick={handleReset}>
        RESET
      </button>
    </div>
  );
}

export default RemoveTodo;
