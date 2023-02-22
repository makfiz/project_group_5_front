import OurFriendsItem from "./OurFriendsItem";
import { BoxFriendsList, FriendsList, FriendsItem } from './OurFriends.styled';
// import { Container } from "components/Header/Header.styled";
import { Title } from "components/Title/Title";

const OurFriendsList = ({ourFriends}) => {
// console.log("ourFriends", ourFriends)

  return <>
    <Title>Our friends</Title>
    <BoxFriendsList>
    <FriendsList>
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
