import React, { useState } from 'react';
import { ModalAddsPetFirst } from './ModaAddPetsFist';
import { ModalAddsPetSecond } from './ModalAddPetsSecond';
// import { useAddPetMutation } from '../../../redux/Pet/PetsApi'


export const ModalAddsPet = props => {
  const [addPet] = useAddPetMutation();
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    name: '',
    dateOfBirth: '',
    breed: '',
    petImage: '',
    comments: '',
  });

  const handleRequest = formData => {
    addPet(formData);
  };

  const handleNextStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setPage(prev => prev + 1);

    if (page === 1) {
      const { name, dateOfBirth, breed, petImage, comments } = newData;
      console.log(newData);
      const formData = new FormData();
      formData.append('name', name);
      formData.append('dateOfBirth', dateOfBirth);
      formData.append('breed', breed);
      formData.append('petImage', petImage);
      formData.append('comments', comments);
      console.log(formData);
      handleRequest(formData);
      return;
    }
  };

  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setPage(prev => prev - 1);
  };

  const steps = [
    <ModalAddsPetFirst
      closeModal={props.onCloseModal}
      next={handleNextStep}
      data={data}
      title="First Page"
    />,
    <ModalAddsPetSecond
      closeModal={props.onCloseModal}
      prev={handlePrevStep}
      next={handleNextStep}
      data={data}
      title="Second Page"
    />,
  ];

  return <>{steps[page]}</>;
};
