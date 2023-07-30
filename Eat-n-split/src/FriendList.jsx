function Friend({
  friend,
  onPersonSelect,
  selectedPerson,
  onSetShowSplitForm,
  showSplitForm,

  onSetFormAddFriend,
}) {
  const person = { name: friend.name, balance: friend.balance, id: friend.id };

  const isSelected = selectedPerson.id === person.id && showSplitForm;

  const listItemStyle = {
    backgroundColor: isSelected ? "#FEF4E6" : "transparent",
  };

  function handleSelectClick() {
    onSetShowSplitForm((showSplitForm) => !showSplitForm);
    onPersonSelect(person);
    onSetFormAddFriend(false);
  }

  function handleCloseButton() {
    onSetShowSplitForm((showSplitForm) => !showSplitForm);
    onPersonSelect("");
  }
  return (
    <li style={listItemStyle} className="selected sidebar">
      <h3>{friend.name}</h3>
      <img src={friend.image} alt={friend.name} />

      {friend.balance > 0 && (
        <p style={{ color: "green" }}>
          {friend.name} owes you {friend.balance}€
        </p>
      )}
      {friend.balance < 0 && (
        <p style={{ color: "red" }}>
          You owe {Math.abs(friend.balance)}€ to {friend.name}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      {selectedPerson.id === friend.id && showSplitForm ? (
        <button onClick={handleCloseButton} className="button">
          Close
        </button>
      ) : (
        <button onClick={handleSelectClick} className="button">
          Select
        </button>
      )}
    </li>
  );
}

function FriendList({
  data,
  onPersonSelect,
  selectedPerson,
  showSplitForm,
  onSetShowSplitForm,

  onSetFormAddFriend,
}) {
  return (
    <div>
      <ul>
        {data.map((friend) => (
          <Friend
            key={friend.id}
            friend={friend}
            onPersonSelect={onPersonSelect}
            selectedPerson={selectedPerson}
            showSplitForm={showSplitForm}
            onSetShowSplitForm={onSetShowSplitForm}
            onSetFormAddFriend={onSetFormAddFriend}
          />
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
