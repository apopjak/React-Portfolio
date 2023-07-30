function Stats({ items }) {
  // number of items
  const itemsLength = items.length;

  // filter all packed items.
  const onlyPackedItems = items.filter((item) => item.packed).length;

  // percentage calculation
  const statistic = Math.round((onlyPackedItems / itemsLength) * 100);

  if (isNaN(statistic)) {
    return (
      <footer className="stats">
        Start adding items to the list to get ready as soon as is possible 💪
      </footer>
    );
  }
  return (
    <footer className="stats">
      {statistic === 100 ? (
        <em>You got everything! Ready to go 🛩️</em>
      ) : (
        <em>
          🧳 You have {itemsLength} item on your list and you already packed{" "}
          {onlyPackedItems} ({statistic}%)
        </em>
      )}
    </footer>
  );
}

export default Stats;
