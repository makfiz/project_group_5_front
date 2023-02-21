import { Box } from 'components/Box/Box';

import { ReactComponent as PlusIcon } from '../../../assets/icons/plusIcon.svg';

import { Container, AddPetBtn, Title, Text } from './PetsData.styled';

export const PetsData = () => {
  return (
    <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Title>My pets:</Title>
        <Box display="flex" alignItems="center">
          <Text>Add pet</Text>
          <AddPetBtn type="button">
            <PlusIcon />
          </AddPetBtn>
        </Box>
      </Box>
    </Container>
  );
};
