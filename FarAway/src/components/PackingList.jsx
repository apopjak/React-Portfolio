import React from "react";

function Item({ item, onRemoveItem, onPackedChange }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onPackedChange(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} x {item.description}
      </span>
      <button onClick={() => onRemoveItem(item.id)}>❌</button>
      {/* PASSING CUSOTM FUNCTION. OTHERWISE ONCLICK WOULD USE EVENT LISTENER AUTOMATICALLY */}
    </li>
  );
}

function PackingList({ items, onRemoveItem, onPackedChange, onClearList }) {
  const [sortSelection, setSortSelection] = React.useState("input");

  function handleSelection(event) {
    setSortSelection((prevSelection) => event.target.value);
  }

  // let is variable which we can mutate
  let sortedItems = items;

  // if selection is default input then just return items. IMPORTANT: we have to pass sortedItems
  // to Item component instead of item
  if (sortSelection === "input") sortedItems = items;

  if (sortSelection === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortSelection === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => (a.packed === b.packed ? 0 : a.packed ? 1 : -1));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onRemoveItem={onRemoveItem}
            onPackedChange={onPackedChange}
          />
        ))}
      </ul>
      <div>
        <select value={sortSelection} onChange={handleSelection}>
          <option>SORT BY INPUT ORDER</option>
          <option value={"description"}>SORT BY DESCRIPTION</option>
          <option value={"packed"}>SORT BY PACKED STATUS</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}

export default PackingList;
