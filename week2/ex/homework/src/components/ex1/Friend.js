import { useState } from "react";
import Button from "./Button";
import FriendProfile from "./FriendProfile";
const Friend = () => {
  const [friend, setFriend] = useState();
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  const getFriend = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://www.randomuser.me/api?results=1");
      const data = await res.json();
      setFriend(data.results[0]);
      setLoading(false);
    } catch (err) {
      setHasError(true);
      setLoading(false);
    }
  };
  return (
    <div className="co_container">
      <h1>Random friend</h1>
      <Button onClickEvent={getFriend} />
      {!hasError && loading && <li>lOADIN ....</li>}
      {!hasError && friend && <FriendProfile friend={friend} />}
      {hasError && <li>Failed to get data ....</li>}
    </div>
  );
};

export default Friend;
