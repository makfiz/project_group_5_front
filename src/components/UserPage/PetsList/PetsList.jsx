import { PetsListItem } from '../PetsListItem/PetsListItem';

import { Container, List } from './PetsList.styled';

export const PetsList = () => {
  const pets = [
    {
      _id: '63f3f015cd982d36f8e3d7d5',
      name: 'Felix',
      dateOfBirth: '16/01/2022',
      breed: 'cat',
      comments:
        'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur ',
      owner: '63f4fc9e37402deb8f52f920',
      createdAt: '2023-02-20T22:11:33.841+00:00',
      updatedAt: '2023-02-21T19:42:24.043+00:00',
      petImage: '',
    },
    {
      _id: '63f3f015cd982d36f8e3d7d5',
      name: 'Felix',
      dateOfBirth: '16/01/2022',
      breed: 'cat',
      comments: 'my favorite cat',
      owner: '63f4fc9e37402deb8f52f920',
      createdAt: '2023-02-20T22:11:33.841+00:00',
      updatedAt: '2023-02-21T19:42:24.043+00:00',
      petImage:
        'http://res.cloudinary.com/dzkf7l1qx/image/upload/v1677008543/io1lqsmqerfmb7grymbc.jpg',
    },
    {
      _id: '63f3f015cd982d36f8e3d7d5',
      name: 'Felix',
      dateOfBirth: '16/01/2022',
      breed: 'cat',
      comments: 'my favorite cat',
      owner: '63f4fc9e37402deb8f52f920',
      createdAt: '2023-02-20T22:11:33.841+00:00',
      updatedAt: '2023-02-21T19:42:24.043+00:00',
      petImage:
        'http://res.cloudinary.com/dzkf7l1qx/image/upload/v1677008543/io1lqsmqerfmb7grymbc.jpg',
    },
  ];

  if (!pets) {
    return null;
  }

  return (
    <Container>
      <List>
        {pets.map(({ _id, name, dateOfBirth, breed, comments, petImage }) => {
          return (
            <PetsListItem
              key={_id}
              name={name}
              dateOfBirth={dateOfBirth}
              breed={breed}
              comments={comments}
              petImage={petImage}
            />
          );
        })}
      </List>
    </Container>
  );
};
