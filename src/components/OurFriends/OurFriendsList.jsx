import OurFriendsItem from "./OurFriendsItem";
import { BoxFriendsList, FriendsList, FriendsItem } from './OurFriends.styled';

const OurFriendsList = ({ourFriends}) => {
// console.log("ourFriends", ourFriends)

  return <BoxFriendsList>
    <FriendsList>
      {ourFriends.map(friend => (
        <FriendsItem key={friend._id}>
          <OurFriendsItem friend={friend} />
        </FriendsItem>
      ))}
    </FriendsList>
  </BoxFriendsList>;
}

export default OurFriendsList;
