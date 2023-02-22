import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchOurFriends } from "../redux/OurFriends/operations";
import { getFriends, getLoadingStatus } from './../redux/OurFriends/selectors';
import OurFriendsList from "../components/OurFriends/OurFriendsList/OurFriendsList";
import { Loader } from "../components/Loader/Loader";
import { Title } from "../components/Title/Title";
import { Container } from "../components/OurFriends/OurFriendsList/OurFriendsList.styled";


const FriendsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(fetchOurFriends());
  }, [dispatch]);

  const ourFriends = useSelector(getFriends);
  const isLoading = useSelector(getLoadingStatus)

    const content = isLoading ? <Loader/> : <OurFriendsList ourFriends={ourFriends} />

  return (
    <Container>
      <Title>Our friends</Title>
        {content}
    </Container>
  );
};

export default FriendsPage;