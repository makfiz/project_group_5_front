import {
  AddPetMobileButton,
  AddPetMobileButtonText,
} from './NoticesAddPetButtonMobile.styled';

import { ReactComponent as PlusIconMobile } from '../../assets/icons/plusIconMobile.svg';

export const NoticesAddPetButtonMobile = () => {
  return (
    <AddPetMobileButton type="button">
      <AddPetMobileButtonText>Add pet</AddPetMobileButtonText>
      <PlusIconMobile />
    </AddPetMobileButton>
  );
};
