import React from "react";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import FriendList from "./FriendList";
import dataSource from "./dataSource";

function App() {
  const [friendList, setFriendList] = React.useState(dataSource);
  const [selectedPerson, setSelectedPerson] = React.useState("null");
  const [showSplitForm, setShowSplitForm] = React.useState(false);
  const [formAddFriend, setFormAddFriend] = React.useState(false);

  function handleSplitBill(value) {
    setFriendList((prevValue) =>
      prevValue.map((friend) =>
        friend.id === selectedPerson.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  function handleFriendList(newList) {
    setFriendList(newList);
  }

  function handlePersonSelect(person) {
    setSelectedPerson(person);
  }
  console.log(selectedPerson);
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          data={friendList}
          onPersonSelect={handlePersonSelect}
          selectedPerson={selectedPerson}
          showSplitForm={showSplitForm}
          onSetShowSplitForm={() => setShowSplitForm(!showSplitForm)}
          onSetFormAddFriend={setFormAddFriend}
        />

        {!formAddFriend && (
          <button
            onClick={() => {
              setFormAddFriend(!formAddFriend);
              setShowSplitForm(false);
            }}
            className="button"
          >
            Add Friend
          </button>
        )}
        {formAddFriend && (
          <FormAddFriend
            data={friendList}
            onHandleFriendList={handleFriendList}
          />
        )}
        {formAddFriend && (
          <button onClick={() => setFormAddFriend(false)} className="button">
            Close
          </button>
        )}
      </div>
      {showSplitForm && (
        <FormSplitBill
          selectedPerson={selectedPerson}
          data={friendList}
          onSplitBill={handleSplitBill}
          onSetShowSplitForm={setShowSplitForm}
        />
      )}
    </div>
  );
}

export default App;
