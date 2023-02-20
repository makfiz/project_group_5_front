// import React, { useState } from "react";
import { BoxModal, ModalContent } from './OurFriends.styled';
import  WorkHours from './WorkHours'

function Modal({workDays, onClick}) {

  return (
    <div >
      <BoxModal onClick={onClick}>
        <ModalContent>
            {/* <span className="close" onClick={() => toggleModal(false)}>
              &times;
            </span> */}
          {/* <p>Hours work</p> */}
          {workDays ?
            (<WorkHours workDays={workDays}/>) :
            (<p>No working hours</p>)}
        </ModalContent>
      </BoxModal>
    </div>
  );
}

export default Modal;
