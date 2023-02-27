import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/selectors';
import { deletePet } from 'redux/Pets/petsOperations';

import { FieldPetImg } from './FieldPetImage';
import noPhoto from 'assets/default-img/default.jpg';

import {
  PetCard,
  ImgWrapper,
  InfoWrapper,
  InfoTitle,
  InfoText,
  CommentsTitle,
  DeleteBtn,
  DeleteIcon,
  ModalDelWrapper,
  DeleteModalButton,
  DelBtnWrapper,
} from './PetsListItem.styled';

export const PetsListItem = ({
  id,
  name,
  dateOfBirth,
  breed,
  comments,
  petImage,
}) => {
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const handleDelete = () => dispatch(deletePet(id));
  return (
    <PetCard>
      <ImgWrapper>
        {petImage ? (
          <FieldPetImg petImage={petImage} _id={id} />
        ) : (
          <FieldPetImg petImage={noPhoto} _id={id} />
        )}
      </ImgWrapper>

      {!isModalDeleteOpen ? (
        <InfoWrapper>
          <InfoTitle>
            Name: <InfoText>{name}</InfoText>
          </InfoTitle>
          <InfoTitle>
            Date of birth: <InfoText>{dateOfBirth}</InfoText>
          </InfoTitle>
          <InfoTitle>
            Breed: <InfoText>{breed}</InfoText>
          </InfoTitle>
          <CommentsTitle>
            Comments: <InfoText>{comments}</InfoText>
          </CommentsTitle>
        </InfoWrapper>
      ) : (
        <ModalDelWrapper>
          <InfoTitle style={{ marginBottom: '30px', textAlign: 'center' }}>
            Are you sure want to delete this pet permanently?
          </InfoTitle>
          <DelBtnWrapper>
            <DeleteModalButton
              type="button"
              onClick={() => setIsModalDeleteOpen(false)}
              disabled={isLoading}
            >
              Cancel
            </DeleteModalButton>
            <DeleteModalButton
              type="button"
              onClick={handleDelete}
              disabled={isLoading}
            >
              {isLoading ? 'Deleting...' : 'Confirm'}
            </DeleteModalButton>
          </DelBtnWrapper>
        </ModalDelWrapper>
      )}
      <DeleteBtn
        type="button"
        disabled={isModalDeleteOpen}
        onClick={() => setIsModalDeleteOpen(true)}
      >
        <DeleteIcon />
      </DeleteBtn>
    </PetCard>
  );
};
