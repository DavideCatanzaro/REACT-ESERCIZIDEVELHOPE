import React, { useState } from "react";

function TodoList() {
  const [items, setItems] = useState([]);

  function addItem(event) {
    event.preventDefault();
    const newItem = event.target.elements.item.value;
    setItems([...items, newItem]); 
  }

  return (
    <div>
      <form onSubmit={addItem}>
        <input type="text" name="item" />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;