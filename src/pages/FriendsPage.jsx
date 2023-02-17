import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import OurFriends from "../components/OurFriends/OurFriends";
import { fetchOurFriends } from "../redux/OurFriends/operations";
import { getFriends } from './../redux/OurFriends/selectors';

const FriendsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(fetchOurFriends());
  }, [dispatch]);

    const ourFriends = useSelector(getFriends)
  // console.log("ourFriends", ourFriends)

  return (
    <div>
      <h2>Our friends</h2>
      <OurFriends ourFriends={ourFriends} />
    </div>
  );
};

export default FriendsPage;