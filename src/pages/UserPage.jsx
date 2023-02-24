import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from '../redux/auth/selectors';

import { UserData } from 'components/UserPage/UserData/UserData';
import { PetsData } from '../components/UserPage/PetsData/PetsData';
import { ContainerWrapper } from '../components/ContainerWrapper/ContainerWrapper';
import { Box } from '../components/Box/Box';
import { PetsList } from '../components/UserPage/PetsList/PetsList';

const UserPage = () => {
  const CurrentUser = useSelector(selectUser);

  return (
    <ContainerWrapper>
      <Box display="flex">
        <UserData user={CurrentUser} />
        <div
          style={{ display: 'flex', flexShrink: 0, flexDirection: 'column' }}
        >
          <PetsData />
          <PetsList />
        </div>
      </Box>
    </ContainerWrapper>
  );
};

export default UserPage;
