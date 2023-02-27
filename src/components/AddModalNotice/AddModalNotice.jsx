import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { useFormik } from 'formik';

import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { AiOutlineClose } from 'react-icons/ai';

import { addNotice, NoticePetImageUpload } from 'redux/notices/operations';
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
  Error,
} from './AddModalNotice.styled';

const validationSchemaStepOne = Yup.object().shape({
  title: Yup.string()
    .required('Title is required')
    .min(2, 'Title should be at least 2 characters long')
    .max(48, 'Title should be up to 48 characters long'),
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇєЄ]+(?: [a-zA-Zа-яА-ЯіІїЇєЄ]+)*$/,
      'Only letters can be accepted'
    )
    .min(2, 'Name should be at least 2 characters long')
    .max(16, 'Name should be up to 16 characters long'),
  birthday: Yup.string().matches(
    /^(0?[1-9]|[1-2][0-9]|3[0-1])\.(0?[1-9]|1[0-2])\.\d{4}$/
  ),
  breed: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇєЄ]+(?: [a-zA-Zа-яА-ЯіІїЇєЄ]+)?(?: [a-zA-Zа-яА-ЯіІїЇєЄ]+)*$/,
      'Only letters can be accepted'
    )
    .min(2, 'Breed should be at least 2 characters long')
    .max(24, 'Breed should be up to 24 characters long'),
});

const validationSchemaStepTwo = Yup.object().shape({
  sex: Yup.string().required(),
  location: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇєЄ]+(?:[-\s]?[a-zA-Zа-яА-ЯіІїЇєЄ]+)*,\s*[a-zA-Zа-яА-ЯіІїЇєЄ'’\s-]+$/,
      'Should be at least two words separated by coma'
    )
    .required('City is required'),
  price: Yup.string()
    .min(1, 'Price can not be 0')
    .when('category', (category, schema) => {
      if (category.join() === 'sell') {
        return schema.required('Price is required');
      }
      return schema;
    }),
  comments: Yup.string()
    .required('Comment is required')
    .min(8, 'Title should be at least 8 characters long')
    .max(200, 'Title should be up to 200 characters long'),
});

export const AddModalNotice = ({ handleModalToggle }) => {
  const [isFirstRegisterStep, setIsFirstRegisterStep] = useState(true);
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // const moveNextRegistration = () => {
  //   isFirstRegisterStep
  //     ? setIsFirstRegisterStep(false)
  //     : setIsFirstRegisterStep(true);
  // };

  const categorySetByDefault = () => {
    let enterPoint = pathname.split('/').pop();

    switch (enterPoint) {
      case 'lost-found':
        enterPoint = 'lost_found';
        break;

      case 'for-free':
        enterPoint = 'in_good_hands';
        break;

      default:
        enterPoint = 'sell';
        break;
    }

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
      price: '',
      petImage: null,
      comments: '',
    },
    validateOnChange: false,
    validationSchema: isFirstRegisterStep
      ? validationSchemaStepOne
      : validationSchemaStepTwo,
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

  const onSumbit = e => {
    const {
      birthday,
      breed,
      category,
      comments,
      location,
      name,
      photoURL,
      price,
      sex,
      title,
    } = formik.values;

    const img = new FormData();
    img.append('img', photoURL);
    dispatch(
      addNotice({
        birth: !birthday ? 'unknown' : birthday,
        breed: !breed ? 'unknown' : breed,
        category,
        comments,
        location,
        name: !name ? 'unknown' : name,
        price: formik.values.category === 'sell' ? price : '1',
        sex,
        title,
      })
    ).then(data => {
      if (!photoURL) return;
      dispatch(
        NoticePetImageUpload({ noticeId: data.payload.notice._id, img })
      );
    });

    handleModalToggle();
  };
  const pageOneIsValid = () => {
    if (
      !formik.errors.title &&
      !formik.errors.name &&
      !formik.errors.birthday &&
      !formik.errors.breed &&
      formik.touched.title
    ) {
      return true;
    }
    return false;
  };

  const pageTwoIsValid = () => {
    console.log(formik.errors);

    if (
      !formik.errors.sex &&
      !formik.errors.location &&
      !formik.errors.price &&
      !formik.errors.comments
    ) {
      return true;
    }
    return false;
  };

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
          onSubmit={async e => {
            e.preventDefault();
            try {
              const formikErrors = await formik.validateForm();
              console.log(formikErrors);
              console.log(pageTwoIsValid());
              if (pageTwoIsValid()) {
                onSumbit(e);
              }
            } catch (error) {
              console.log(error);
            }
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
                      formik.values.category === 'lost_found' ? true : false
                    }
                    type="radio"
                    name="category"
                    value="lost_found"
                    id="lost-found"
                  />
                  <RadioButton>lost/found</RadioButton>
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    defaultChecked={
                      formik.values.category === 'in_good_hands' ? true : false
                    }
                    type="radio"
                    name="category"
                    value="in_good_hands"
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
                    onBlur={formik.handleBlur}
                    name="title"
                    placeholder="Type name"
                    required
                  />
                </TextLabel>
                {formik.errors.title && <Error>{formik.errors.title}</Error>}
              </InputCont>
              <InputCont>
                <TextLabel>
                  Name pet
                  <TextInput
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="name"
                    placeholder="Type name pet"
                    required
                    minLength="2"
                    maxLength="48"
                    title="Length of title should be 2-16 letters"
                  />
                  {formik.errors.name && <Error>{formik.errors.name}</Error>}
                </TextLabel>
              </InputCont>
              <InputCont>
                <TextLabel>
                  Date of birth
                  <DateInput
                    value={formik.values.birthday}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="birthday"
                    placeholder="Type date of birth"
                    required
                    pattern="^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)[0-9]{2}$"
                    title="Birthday should be in format dd.mm.yyyy"
                  />
                  {formik.errors.birthday && (
                    <Error>
                      {formik.errors.birthday.includes(
                        'birthday must match the following'
                      )
                        ? 'Birthday should be in format dd.mm.yyyy'
                        : formik.errors.birthday}
                    </Error>
                  )}
                </TextLabel>
              </InputCont>
              <InputCont>
                <TextLabel>
                  Breed
                  <TextInput
                    value={formik.values.breed}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="breed"
                    placeholder="Type breed"
                    required
                    minLength="2"
                    maxLength="24"
                  />
                  {formik.errors.breed && <Error>{formik.errors.breed}</Error>}
                </TextLabel>
              </InputCont>
              <ActionButtons>
                <Button type="button" onClick={handleModalToggle}>
                  Cancel
                </Button>

                <Button
                  type="button"
                  // disabled={!pageOneIsValid()}
                  onClick={async () => {
                    try {
                      const formikErrors = await formik.validateForm();
                      if (pageOneIsValid()) {
                        console.log(pageOneIsValid());
                        setIsFirstRegisterStep(!isFirstRegisterStep);
                      }
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                >
                  Next
                </Button>
              </ActionButtons>
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
                  <span className="checkmark"></span>
                  Female
                </SexLabel>
                {formik.errors.sex && <Error>{formik.errors.sex}</Error>}
              </SexFormBox>
              <InputCont>
                <TextLabel htmlFor="locationPet">
                  City, Region<Asterisk>*</Asterisk>
                  <TextInput
                    value={formik.values.location}
                    id="location"
                    name="location"
                    type="text"
                    onChange={formik.handleChange}
                    placeholder="Введіть місце"
                  />
                </TextLabel>
                {formik.errors.location && (
                  <Error>{formik.errors.location}</Error>
                )}
              </InputCont>
              <InputCont>
                {formik.values.category === 'sell' && (
                  <TextLabel htmlFor="pricePet">
                    Price<Asterisk>*</Asterisk>:
                    <TextInput
                      id="pricePet"
                      name="price"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.price}
                      placeholder="Введіть ціну"
                    />
                    {formik.errors.price && (
                      <Error>{formik.errors.price}</Error>
                    )}
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
                {formik.errors.comments && (
                  <Error>{formik.errors.comments}</Error>
                )}
              </InputContTextArea>
              <ActionButtons>
                <Button
                  type="button"
                  onClick={() => {
                    setIsFirstRegisterStep(!isFirstRegisterStep);
                  }}
                >
                  Back
                </Button>

                <Button type="submit">Done</Button>
              </ActionButtons>
            </>
          )}
        </form>
      </Container>
    </ModalNotice>
  );
};
