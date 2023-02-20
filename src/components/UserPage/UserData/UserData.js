import {
  Container,
  UserInfoCard,
  UserPageHeader,
  UserPhotoThumb,
} from './UserData.styled';
import { UserDataItem } from '../UserDataItem/UserDataItem';
import { Logout } from '../Logout/Logout';

export const UserData = () => {
  return (
    <Container>
      <UserPageHeader>My information:</UserPageHeader>
      <UserInfoCard>
        <UserPhotoThumb>
          {/* <img src={user_photo} alt={username} width="233px" /> */}
        </UserPhotoThumb>
        {/* <UserDataItem /> */}
        <Logout />
      </UserInfoCard>
    </Container>
  );
};
