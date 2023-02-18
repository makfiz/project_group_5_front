import OurFriendsItem from "./OurFriendsItem";

const OurFriendsList = ({ourFriends}) => {
// console.log("ourFriends", ourFriends)

  return <div className="BoxFriendsList">
    <ul className="FriendsList">
      {ourFriends.map(friend => (
        <li key={friend._id} className="FriendsItem">
          <OurFriendsItem friend={friend} />
        </li>
      ))}
    </ul>
  </div>;
}

export default OurFriendsList;
