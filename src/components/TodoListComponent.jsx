import React, { useState } from "react";

function TodoList() {
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

  const handleReset = () => {
    setItems([]);
    setInputValue("");
  };

  const handleRemove = (id) => {
    const removeItems = [...items];
    removeItems.splice(id, 1);
    setItems(removeItems);
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
            <li index={id}>{item}</li>
            <button
              type="click"
              onClick={() => {
                handleRemove(id);
              }}
            >
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

export default TodoList;