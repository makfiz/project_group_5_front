import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import authOperations from 'redux/auth/operations';
import { selectUser, selectIsRefreshing } from 'redux/auth/selectors';

import { UserData } from 'components/UserPage/UserData/UserData';
import { PetsData } from 'components/UserPage/PetsData/PetsData';
import { Container } from 'components/Container/Container';
import { PetsList } from 'components/UserPage/PetsList/PetsList';
import { Loader } from 'components/Loader/Loader';
import { LoaderWrapper } from 'components/Loader/Loader.styled.jsx';
import { MainWrapper, SecondaryWrapper } from './UserPage.styled';

const UserPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user.name === null) dispatch(authOperations.refresh());
  }, [dispatch]);

  if (user.name === null) {
    return (
      <LoaderWrapper>
        <Loader Width={240} />
      </LoaderWrapper>
    );
  }

  return (
    <Container>
      <MainWrapper>
        <UserData user={user} />
        <SecondaryWrapper>
          <PetsData />
          <PetsList />
        </SecondaryWrapper>
      </MainWrapper>
    </Container>
  );
};

export default UserPage;
