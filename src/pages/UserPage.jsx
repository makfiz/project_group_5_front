import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from '../redux/auth/selectors';

import { UserData } from 'components/UserPage/UserData/UserData';
import { PetsData } from '../components/UserPage/PetsData/PetsData';

const UserPage = () => {
  const CurrentUser = useSelector(selectUser);

  return (
    <>
      <UserData user={CurrentUser} />
      <PetsData />
    </>
  );
};

export default UserPage;
