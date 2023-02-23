import defaultImage from '../../../assets/default-img/default.jpg';

import {
  PetCard,
  ImgWrapper,
  InfoWrapper,
  InfoTitle,
  InfoText,
  CommentsTitle,
} from './PetsListItem.styled';

export const PetsListItem = ({
  id,
  name,
  dateOfBirth,
  breed,
  comments,
  petImage,
}) => {
  return (
    <PetCard>
      <ImgWrapper>
        {petImage ? (
          <img
            src={petImage}
            alt={breed}
            style={{ width: '240px', height: '240px' }}
          />
        ) : (
          <img
            src={defaultImage}
            alt={breed}
            style={{ width: '240px', height: '240px' }}
          />
        )}
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
    </PetCard>
  );
};
