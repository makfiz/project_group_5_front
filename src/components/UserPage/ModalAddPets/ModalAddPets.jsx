import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ModalAddsPetFirst } from './ModaAddPetsFist';
import { ModalAddsPetSecond } from './ModalAddPetsSecond';
import petsOperations from 'redux/Pets/petsOperations';

export const ModalAddsPet = props => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    name: '',
    dateOfBirth: '',
    breed: '',
    petImage: null,
    comments: '',
  });

  const handleRequest = (petObj, formData) => {
    dispatch(petsOperations.addPet(petObj)).then(data =>
      dispatch(
        petsOperations.updatePetImage({
          petId: data.payload.myNewPet._id,
          formData,
        })
      )
    );
  };

  const handleNextStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setPage(prev => prev + 1);

    if (page === 1) {
      const { name, dateOfBirth, breed, comments, petImage } = newData;
      const petObj = { name, dateOfBirth, breed, comments };
      const formData = new FormData();
      formData.append('petImage', petImage);

      handleRequest(petObj, formData);

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
