import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import OurFriendsList from "../components/OurFriends/OurFriendsList";
import { fetchOurFriends } from "../redux/OurFriends/operations";
import { getFriends } from './../redux/OurFriends/selectors';

const FriendsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(fetchOurFriends());
  }, [dispatch]);

  const ourFriends = useSelector(getFriends);
  // console.log("ourFriends", ourFriends)

  return (
    <div>
      <h2>Our friends</h2>
      <OurFriendsList ourFriends={ourFriends} />
    </div>
  );
};

export default FriendsPage;