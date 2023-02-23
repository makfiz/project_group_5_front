import React, { useState } from 'react';
import { ModalAddsPetFirst } from './ModaAddPetsFist';
import { ModalAddsPetSecond } from './ModalAddPetsSecond';
 

export const ModalAddsPet = props => {
  
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    name: '',
    dateOfBirth: '',
    breed: '',
    petImage: '',
    comments: '',
  });

  

  const handleNextStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setPage(prev => prev + 1);

    if (page === 1) {
      const { name, dateOfBirth, breed, petImage, comments } = newData;
      console.log(newData);
      
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
