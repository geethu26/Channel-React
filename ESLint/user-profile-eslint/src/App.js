import { useEffect, useState } from "react";
import Greeting from "./components/Greeting";
import UserInfo from "./components/UserInfo";
import FriendsList from "./components/FriendsList";

function App() {
  const [user, setUser] = useState(null);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/user")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching users:", err));

    fetch("http://localhost:3001/friends")
      .then((res) => res.json())
      .then((data) => setFriends(data))
      .catch((err) => console.error("Error fetching friends:", err));
  });

  //eslint-disable-next-line react/react-in-jsx-scope
  if (!user) return <p>Loading...</p>;
  return (
    <div className="container mb-4 p-4">
      <Greeting name={user.username} />
      <UserInfo user={user} />
      <FriendsList friends={friends} />
    </div>
  );
}

export default App;
