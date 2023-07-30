import React from "react";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Form from "./components/Form";
import Stats from "./components/Stats";

export default function App() {
  const [items, setItems] = React.useState([]);

  function handleAddItem(item) {
    setItems((items) => {
      return [...items, item];
    });
  }

  function handlePackedItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    // Rename the argument to 'itemId'
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to cleat your list?"
    );
    const emptyList = [];

    if (confirmed) {
      setItems((items) => emptyList);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} items={items} />
      <PackingList
        items={items}
        onRemoveItem={handleDeleteItem}
        onPackedChange={handlePackedItem}
        onClearList={handleClearList}
      />
      <Stats key={items.id} items={items} />
    </div>
  );
}
