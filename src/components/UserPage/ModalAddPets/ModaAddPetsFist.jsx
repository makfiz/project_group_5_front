import { Form, Formik } from 'formik';
import { stepOneValidSchema } from 'utils/validationPet';

import icons from '../../../assets/icons/icons.svg';
import { Button } from 'components/Button/Button';
import {
  Container,
  Title,
  BtnStyle,
  BtnClose,
  Wrapper,
  BtnWrapper,
  BtnWrapperNext,
  Input,
  InputWrapper,
  PetLabel,
  CloseCross,
  BtnStyleEmpt,
  Error
} from './ModalAddPets.styled';

export const ModalAddsPetFirst = (props) => {
  
  const handleSubmit = (values) => {
    props.next(values, true);
  };
 
  return (
    <Container>
      <BtnClose type="button" onClick={props.closeModal}>
        <CloseCross>
        <svg>
          <use href={icons + '#icon-blackCross'} />
        </svg>
        </CloseCross>  
      </BtnClose>
      <Wrapper>
        <Title >Add pet</Title>
        <Formik initialValues={props.data} validationSchema={stepOneValidSchema} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <PetLabel htmlFor="name">
                Name pet
              </PetLabel>
              <InputWrapper>
                <Input name="name" placeholder="Type name pet" type="text" />
                <Error name="name" component="p" />
              </InputWrapper>

              <PetLabel htmlFor="dateOfBirth">
                Date of birth
              </PetLabel>
              <InputWrapper>
                <Input name="dateOfBirth" placeholder="Type date of birth" />
                <Error name="dateOfBirth" component="p" />
              </InputWrapper>
              <PetLabel htmlFor="breed">
                Breed
              </PetLabel>
              <InputWrapper>
                <Input name="breed" placeholder="Type breed" type="text" />
                <Error name="breed" component="p" />
              </InputWrapper>
              <BtnWrapper>
                <BtnWrapperNext>
                <Button
                  type="submit"
                  style={BtnStyle}
                  children="Next"
                />
                </BtnWrapperNext>
                <Button
                  style={BtnStyleEmpt}
                  onClick={props.closeModal}
                  children="Cancel"
                  />  
                
                </BtnWrapper>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};

