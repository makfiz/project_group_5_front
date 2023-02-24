import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from '../../redux/auth/selectors';

import { UserData } from 'components/UserPage/UserData/UserData';
import { PetsData } from '../../components/UserPage/PetsData/PetsData';
import { ContainerWrapper } from '../../components/ContainerWrapper/ContainerWrapper';
import { PetsList } from '../../components/UserPage/PetsList/PetsList';

import { MainWrapper, SecondaryWrapper } from './UserPage.styled';

const UserPage = () => {
  
  const CurrentUser = useSelector(selectUser);

  return (
    <ContainerWrapper>
      <MainWrapper>
        <UserData user={CurrentUser} />
        <SecondaryWrapper>
          <PetsData />
          <PetsList />
        </SecondaryWrapper>
      </MainWrapper>
    </ContainerWrapper>
  );
};

export default UserPage;
