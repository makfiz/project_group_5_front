import {
  LinkRedirect,
  Link,
  GoogleIcon,
  Text,
  Wraper,
} from './ChooseRegistration.styled';

import Icon from '../../assets/icons/google-icon.svg';
import { Box } from 'components/Box/Box';

export const ChooseRegistration = () => {
  return (
    <Wraper>
      <Box mb={5}>
        <LinkRedirect to="/registration">Sign up with email</LinkRedirect>
      </Box>

      <Text>or</Text>

      <Link to="https://petssuport4815162342api.onrender.com/api/users/google">
        <GoogleIcon src={Icon} alt="Google Icon" />
        <p>Continue with Google</p>
      </Link>
    </Wraper>
  );
};
