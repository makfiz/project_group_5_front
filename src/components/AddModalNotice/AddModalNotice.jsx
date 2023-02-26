import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { AiOutlineClose } from 'react-icons/ai';

import { addNoticeToFavorite } from 'redux/notices/operations';
import { handleBackdropClick, handleEscClick } from 'utils/modalHelpers';

import { ModalNotice } from 'components/Modal/ModalNotic/ModalNotice';
import { Button } from '../Button/AddButtonNot';
import {
  Container,
  BtnClose,
  CloseCross,
  Title,
  FirstForm,
  UserComment,
  InputCont,
  InputContTextArea,
  TextAreaInput,
  TextLabel,
  TextInput,
  ActionButtons,
  RadioGroup,
  RadioLabel,
  RadioInput,
  RadioButton,
  DateInput,
  SexFormBox,
  BoxQuestion,
  Asterisk,
  InputRadio,
  SexLabel,
  MaleIcon,
  FeMaleIcon,
  PhotoPetInput,
  PhotoAddContainer,
  ImageInputWrapper,
  ImageTitle,
  AddedIamge,
} from './AddModalNotice.styled';

const validationSchemaStepOne = Yup.object().shape({
  title: Yup.string()
    .required('Title is required')
    .min(2, 'Title should be at least 2 characters long')
    .max(48, 'Title should be up to 48 characters long'),
  name: Yup.string()
    .required('Name is required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(?: [a-zA-Zа-яА-Я]+)*$/,
      'Only letters can be accepted'
    )
    .min(2, 'Name should be at least 2 characters long')
    .max(16, 'Name should be up to 16 characters long'),
  birthDate: Yup.date().required('Birth date is required'),
  breed: Yup.string()
    .required('Breed is required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(?: [a-zA-Zа-яА-Я]+)*$/,
      'Only letters can be accepted'
    )
    .min(2, 'Breed should be at least 2 characters long')
    .max(24, 'Breed should be up to 24 characters long'),
});

const validationSchemaStepTwo = Yup.object().shape({
  sex: Yup.string().required(),
  location: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇ]+(?:[-\s]?[a-zA-Zа-яА-ЯіІїЇ]+)*,\s*[a-zA-Zа-яА-ЯіІїЇ'’\s-]+$/,
      'Should be at least two words separated by coma'
    )
    .required('City is required'),
  price: Yup.number()
    .typeError('Price must be a number')
    .min(1, 'Price can not be 0')
    .when('category', (category, schema) => {
      if (category === 'sell') {
        return schema.required('Price is required');
      }
      return schema;
    }),

  petImage: Yup.mixed().required('Please add the picture'),
  comments: Yup.string()
    .required('Comment is required')
    .min(8, 'Title should be at least 8 characters long')
    .max(200, 'Title should be up to 200 characters long'),
});

export const AddModalNotice = ({ handleModalToggle }) => {
  const [isFirstRegisterStep, setIsFirstRegisterStep] = useState(true);
  const [image, setImage] = useState(null);
  const { addNotices } = addNoticeToFavorite();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const moveNextRegistration = () => {
    isFirstRegisterStep
      ? setIsFirstRegisterStep(false)
      : setIsFirstRegisterStep(true);
  };

  const categorySetByDefault = () => {
    const enterPoint = pathname.split('/').pop();
    return enterPoint === 'notices' ? 'sell' : enterPoint;
  };
  const formik = useFormik({
    initialValues: {
      category: categorySetByDefault(),
      title: '',
      name: '',
      birthday: '',
      breed: '',
      sex: '',
      location: '',
      price: 1,
      petImage: null,
      comments: '',
    },
    validationSchema: validationSchemaStepOne,
    onSubmit: values => {
      const data = new FormData();
      data.append('category', values.category);
      data.append('title', values.title);
      data.append('name', values.name);
      data.append('birthday', values.birthday);
      data.append('breed', values.breed);
      data.append('sex', values.sex);
      data.append('location', values.location);
      data.append('price', values.price);
      data.append('comments', values.comments);
      data.append('petImage', values.petImage);
      addNotices(data);
      handleModalToggle();
      navigate('/notices/own');
      toast.success(`Your pet ${values.name} has been added to notices`);
    },
  });

  const onImageChange = e => {
    const { files } = e.currentTarget;
    if (files) {
      setImage(URL.createObjectURL(files[0]));
      formik.setFieldValue('photoURL', files[0]);
    }
  };

  useEffect(() => {
    const escClose = handleEscClick(handleModalToggle);
    return () => escClose();
  }, [handleModalToggle]);

  return (
    <ModalNotice onClick={e => handleBackdropClick(e, handleModalToggle)}>
      <Container>
        <BtnClose onClick={handleModalToggle}>
          <CloseCross>
            <AiOutlineClose />
          </CloseCross>
        </BtnClose>
        <Title>Add pet</Title>
        <form
          encType="multipart/form-data"
          onSubmit={e => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          {isFirstRegisterStep && (
            <FirstForm>
              <UserComment>
                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                amet, consectetur
              </UserComment>
              <RadioGroup onChange={formik.handleChange} required>
                <RadioLabel>
                  <RadioInput
                    defaultChecked={
                      formik.values.category === 'lost-found' ? true : false
                    }
                    type="radio"
                    name="category"
                    value="lost-found"
                    id="lost-found"
                  />
                  <RadioButton>lost/found</RadioButton>
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    defaultChecked={
                      formik.values.category === 'for-free' ? true : false
                    }
                    type="radio"
                    name="category"
                    value="in good hands"
                    id="in good hands"
                  />
                  <RadioButton>in good hands</RadioButton>
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    defaultChecked={
                      formik.values.category === 'sell' ? true : false
                    }
                    type="radio"
                    name="category"
                    value="sell"
                    id="sell"
                  />
                  <RadioButton>sell</RadioButton>
                </RadioLabel>
              </RadioGroup>
              <InputCont>
                <TextLabel>
                  Title of ad<Asterisk>*</Asterisk>
                  <TextInput
                    type="text"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    name="title"
                    placeholder="Type name"
                    required
                  />
                </TextLabel>
              </InputCont>
              <InputCont>
                <TextLabel>
                  Name pet
                  <TextInput
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    name="name"
                    placeholder="Type name pet"
                    required
                    minLength="2"
                    maxLength="48"
                    title="Length of title should be 2-16 letters"
                  />
                </TextLabel>
              </InputCont>
              <InputCont>
                <TextLabel>
                  Date of birth
                  <DateInput
                    value={formik.values.dateOfBirth}
                    onChange={formik.handleChange}
                    name="birthday"
                    placeholder="Type date of birth"
                    required
                    pattern="^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)[0-9]{2}$"
                    title="Birthday should be in format dd.mm.yyyy"
                  />
                </TextLabel>
              </InputCont>
              <InputCont>
                <TextLabel>
                  Breed
                  <TextInput
                    value={formik.values.breed}
                    onChange={formik.handleChange}
                    name="breed"
                    placeholder="Type breed"
                    required
                    minLength="2"
                    maxLength="24"
                  />
                </TextLabel>
              </InputCont>
            </FirstForm>
          )}
          {!isFirstRegisterStep && (
            <>
              <SexFormBox>
                <BoxQuestion>
                  The sex<Asterisk>*</Asterisk>:
                </BoxQuestion>
                <InputRadio
                  id="malePet"
                  name="sex"
                  type="radio"
                  value="male"
                  checked={formik.values.sex === 'male'}
                  onChange={formik.handleChange}
                />
                <SexLabel htmlFor="malePet">
                  <MaleIcon></MaleIcon>
                  Male
                </SexLabel>
                <InputRadio
                  id="femalePet"
                  name="sex"
                  type="radio"
                  value="female"
                  checked={formik.values.sex === 'female'}
                  onChange={formik.handleChange}
                />
                <SexLabel htmlFor="femalePet">
                  <FeMaleIcon></FeMaleIcon>
                  <span class="checkmark"></span>
                  Female
                </SexLabel>
              </SexFormBox>
              <InputCont>
                <TextLabel htmlFor="locationPet">
                  City, Region<Asterisk>*</Asterisk>:
                  {formik.values.location !== '' && formik.errors.location ? (
                    <p>{formik.errors.location}</p>
                  ) : null}
                  <TextInput
                    value={formik.values.location}
                    id="location"
                    name="location"
                    type="text"
                    onChange={formik.handleChange}
                    placeholder="Введіть місце"
                  />
                </TextLabel>
              </InputCont>
              <InputCont>
                {formik.values.category === 'sell' && (
                  <TextLabel htmlFor="pricePet">
                    Price<Asterisk>*</Asterisk>:
                    {formik.values.price !== '' && formik.errors.price ? (
                      <p>{formik.errors.price}</p>
                    ) : null}
                    <TextInput
                      id="pricePet"
                      name="price"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.price}
                      placeholder="Введіть ціну"
                    />
                  </TextLabel>
                )}
              </InputCont>

              <ImageInputWrapper>
                <ImageTitle>Load the pet's image:</ImageTitle>
                {formik.values.petImage === null ? (
                  <PhotoAddContainer htmlFor="imagePet">
                    <svg
                      width="48"
                      height="48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.5 49.166V25.5m0 0V1.833m0 23.667h23.667m-23.667 0H1.834"
                        stroke="#111"
                        strokeOpacity=".6"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <PhotoPetInput
                      id="imagePet"
                      name="petImage"
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      onChange={e => {
                        formik.handleChange(e);
                        onImageChange(e);
                      }}
                    />
                  </PhotoAddContainer>
                ) : (
                  <AddedIamge>
                    <img alt="pet" src={image} />
                  </AddedIamge>
                )}
              </ImageInputWrapper>
              <InputContTextArea>
                <TextLabel htmlFor="commentsAd">
                  Comments<Asterisk>*</Asterisk>
                  {formik.values.comments !== '' && formik.errors.comments ? (
                    <p>{formik.errors.comments}</p>
                  ) : null}
                </TextLabel>
                <TextAreaInput
                  id="commentsAd"
                  name="comments"
                  type="text"
                  maxLength="120"
                  rows={5}
                  onChange={formik.handleChange}
                  value={formik.values.comments}
                />
              </InputContTextArea>
            </>
          )}

          <ActionButtons>
            {isFirstRegisterStep ? (
              <Button onClick={handleModalToggle}>Cancel</Button>
            ) : (
              <Button onClick={moveNextRegistration}>Back</Button>
            )}
            {isFirstRegisterStep ? (
              <Button onClick={moveNextRegistration}> Next</Button>
            ) : (
              <Button>Done</Button>
            )}
          </ActionButtons>
        </form>
      </Container>
    </ModalNotice>
  );
};
