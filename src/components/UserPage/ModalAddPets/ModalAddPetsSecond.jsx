import { useState } from 'react';
import { Form, Formik } from 'formik';
import { stepTwoValidSchema } from 'utils/validationPet';
import icons from 'assets/icons/icons.svg';
import { Button } from 'components/Button/Button';
import { string } from 'yup';
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
  Wrap,
  TextArea,
  BtnStyleEmpt,
  Error,
  ErrorImg
} from './ModalAddPets.styled';


export const ModalAddsPetSecond = props => {
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = values => {
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
        <Title>Add pet</Title>
        <Formik initialValues={props.data} validationSchema={stepTwoValidSchema} onSubmit={handleSubmit}>
          {({ setFieldValue }) => (
            <Form encType="multipart/form-data">
              <AddImgTitle>Add photo and some comments</AddImgTitle>
              <Wrap>
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
                    name="image"
                    accept="image/*"
                    onChange={e => {
                      const fileUploaded = e.target.files[0];
                      setFieldValue('petImage', e.target.files[0]);
                      setImg(URL.createObjectURL(fileUploaded));
                      setLoading(string().required().isValidSync(e.target.files[0]));
                    }}
                  />
              </AddImgBtn>
              
              </Wrap>
              <ErrorImg>{!loading && "Image is required"}</ErrorImg>
              <ComentsWrapper>
                <PetLabel htmlFor="comments"> Comments</PetLabel>
                <TextArea
                  component="textarea"
                  name="comments"
                  placeholder="Type comments"
                />
                <Error name="comments" component="p" />
              </ComentsWrapper>

              <BtnWrapper>
                <BtnWrapperNext>
                  <Button type="submit" style={BtnStyle} children="Done" />
                </BtnWrapperNext>
                <Button
                  style={BtnStyleEmpt}
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
