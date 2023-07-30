import React from "react";
function FormSplitBill({ selectedPerson, onSplitBill, onSetShowSplitForm }) {
  const [billValue, setBillValue] = React.useState(0);
  const [yourExpenses, setYourExpensess] = React.useState(0);
  const [whoPaysBill, setWhoPaysBill] = React.useState("You");
  const friendsBill = billValue ? billValue - yourExpenses : "";

  if (isNaN(yourExpenses)) setYourExpensess(0);
  if (isNaN(billValue)) setBillValue(0);

  function handleYourExpenses(e) {
    setYourExpensess(
      yourExpenses > billValue ? yourExpenses : parseInt(e.target.value)
    );
  }
  console.log(whoPaysBill);
  function handleSubmit(e) {
    e.preventDefault();
    if (!billValue || !friendsBill) return;
    onSplitBill(whoPaysBill === "You" ? friendsBill : -friendsBill);

    setBillValue(0);
    setYourExpensess(0);
    setWhoPaysBill("You");
    onSetShowSplitForm(false);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedPerson.name}</h2>
      <label>💰 Bill value</label>
      <input
        onChange={(e) => setBillValue(parseInt(e.target.value))}
        value={billValue}
        type="text"
      />

      <label>😛 Your expense</label>
      <input
        onChange={handleYourExpenses}
        value={yourExpenses}
        placeholder="0"
        type="text"
      />

      <label>👉 {selectedPerson.name}'s expense</label>
      <input value={friendsBill} type="text" disabled />

      <label>🤑 Who is paying bill?</label>
      <select onChange={(e) => setWhoPaysBill(e.target.value)}>
        <option>You</option>
        <option>{selectedPerson.name}</option>
      </select>

      <button className="button">Split expenses</button>
    </form>
  );
}

export default FormSplitBill;
