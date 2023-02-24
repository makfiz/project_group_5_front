import { useSelector } from 'react-redux';
import { selectUserPets } from '../../../redux/auth/selectors';

import { PetsListItem } from '../PetsListItem/PetsListItem';

import { List } from './PetsList.styled';

export const PetsList = () => {
  const userPets = useSelector(selectUserPets);

  if (!userPets) {
    return null;
  }

  return (
    <List>
      {userPets.map(({ _id, name, dateOfBirth, breed, comments, petImage }) => {
        return (
          <PetsListItem
            key={_id}
            name={name}
            dateOfBirth={dateOfBirth}
            breed={breed}
            comments={comments}
            petImage={petImage}
            id={_id}
          />
        );
      })}
    </List>
  );
};
