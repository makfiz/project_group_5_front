import { useState } from 'react';
import { ErrorMessage, Form, Formik } from 'formik';
import icons from '../../../assets/icons/icons.svg';
import { Button } from 'components/Button/Button';
import {
  Container,
  Title,
  BtnStyle,
  BtnClose,
  CloseCross,
  Wrapper,
  BtnWrapper,
  BtnWrapperNext,
  ComentsWrapper,
  PetLabel,
  AddImgTitle,
  AddImgBtn,
  AddCross,
  AddImg,
  AddPhoto,
  Coments,
  FormWrapper
} from './ModalAddPets.styled';

export const ModalAddsPetSecond = (props) => {
  const [img, setImg] = useState(null);
 
  const handleSubmit = (values) => {
    props.next(values, true);
    props.closeModal();
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
        <Formik initialValues={props.data} onSubmit={handleSubmit}>
          {({ setFieldValue }) => (
            <Form encType="multipart/form-data">
              <AddImgTitle>Add photo and some comments</AddImgTitle>
     <FormWrapper>
              <AddImgBtn type="button">
                {!img ? (
                  <AddCross>
                  <svg>
                    <use href={icons + '#icon-bigPlus'} />
                  </svg>
                  </AddCross>  
                ) : (
                  <AddImg src={img} alt="avatar" />
                )}
                <AddPhoto
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const fileUploaded = e.target.files[0];
                    setFieldValue('petImage', e.target.files[0]);
                    setImg(URL.createObjectURL(fileUploaded));
                    
                  }}
                />
                
                </AddImgBtn>
               </FormWrapper> 
              <ComentsWrapper>
                <PetLabel> Comments</PetLabel>
                  <Coments name="comments" as="textarea" placeholder="Type comments" />
                  <ErrorMessage name="comments" component="p" />            
              </ComentsWrapper>

              <BtnWrapper>
                <BtnWrapperNext>
                <Button
                  type="submit"
                  style={BtnStyle}
                  children="Done"
                  />
                </BtnWrapperNext> 
                <Button
                  style={BtnStyle}
                  onClick={props.prev}
                  children="Back"
                />
              </BtnWrapper>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};