import { useDispatch } from 'react-redux';
import { deletePet } from '../../../redux/Pets/petsOperations';
import { FieldPetImg } from './FieldPetImage';


import {
  PetCard,
  ImgWrapper,
  InfoWrapper,
  InfoTitle,
  InfoText,
  CommentsTitle,
  DeleteBtn,
  DeleteIcon,
} from './PetsListItem.styled';

export const PetsListItem = ({
  id,
  name,
  dateOfBirth,
  breed,
  comments,
  petImage,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deletePet(id));
  return (
    <PetCard>
      <ImgWrapper>
        <FieldPetImg petImage={petImage} _id={id} /> 
      </ImgWrapper>
 
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
      <DeleteBtn type="button" onClick={handleDelete}>
        <DeleteIcon />
      </DeleteBtn>
    </PetCard>
  );
};
