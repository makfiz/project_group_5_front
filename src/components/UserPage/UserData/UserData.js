import {
  Container,
  UserInfoCard,
  UserPageHeader,
  UserPhotoThumb,
  EditPhotoButton,
  EditPhotoIcon,
} from './UserData.styled';
import { UserDataItem } from '../UserDataItem/UserDataItem';
import { Logout } from '../Logout/Logout';

export const UserData = () => {
  return (
    <Container>
      <UserPageHeader>My information:</UserPageHeader>
      <UserInfoCard>
        <UserPhotoThumb>
          {/* <img src={UserPhoto} alt={username} width="233px" /> */}
        </UserPhotoThumb>
        <EditPhotoButton>
          <EditPhotoIcon />
          Edit photo
        </EditPhotoButton>
        <UserDataItem />
        <Logout />
      </UserInfoCard>
    </Container>
  );
};
