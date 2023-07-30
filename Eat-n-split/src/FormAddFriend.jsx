import React from "react";
function FormAddFriend({ data, onHandleFriendList }) {
  const [friendsName, setFriendsName] = React.useState("");
  const [imageAddress, setImageAddress] = React.useState(
    "https://i.pravatar.cc/48"
  );
  console.log(data);
  function handleAddFriend(event) {
    event.preventDefault();
    if (friendsName.length === 0 || imageAddress.length === 0) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name: friendsName,
      image: `${imageAddress}?=${id}`,
      balance: 0,
    };

    onHandleFriendList((data) => [...data, newFriend]);
    setFriendsName("");
    setImageAddress("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend">
      <label>👫Friends name {}</label>
      <input
        value={friendsName}
        type="text"
        onChange={(e) => setFriendsName(e.target.value)}
      />

      <label>🌄 Image URL</label>
      <input
        value={imageAddress}
        type="text"
        onChange={(e) => setImageAddress(e.target.value)}
      />

      <button onClick={handleAddFriend} className="button">
        Add friend
      </button>
    </form>
  );
}

export default FormAddFriend;
