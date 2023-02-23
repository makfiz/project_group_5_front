import OurFriendsItem from "../OurFriendsItem/OurFriendsItem";
import {
  BoxFriendsList,
  FriendsList,
  FriendsItem
} from './OurFriendsList.styled';

const OurFriendsList = ({ ourFriends }) => {

  return <>
    <BoxFriendsList>
    <FriendsList >
      {ourFriends.map(friend => (
        <FriendsItem key={friend._id}>
          <OurFriendsItem friend={friend} />
        </FriendsItem>
      ))}
    </FriendsList>
  </BoxFriendsList>
  </>;
}

export default OurFriendsList;
