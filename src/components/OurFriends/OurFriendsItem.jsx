import React, { useState, useEffect } from "react";

import Modal from "./Modal";
import { FriendTitle, BoxFriendItem, BoxFriendLogo, BoxFriendInfo, FriendInfoItem } from "./OurFriends.styled";
import WorkDays from "./WorkDays";

const OurFriendsItem = ({ friend }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleKeyPress = (event) => {
      console.log("event", event)
      if (event.keyCode === 27) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    // console.log('toggle modal')
  };

  const closeModal = (isOpen) => {
    setIsOpen(false);
  };

  const handleClose = (event) => {
    closeModal();
  };

  const {
    title,
    imageUrl,
    address,
    email,
    phone,
    workDays,
    addressUrl,
    url } = friend;
  // console.log("workDays", workDays)

  const mailto = 'mailto:' 
  const tel = 'tel:'
  const hrefMail = mailto.concat(email) 
  const hreftel = tel.concat(phone)

  return <>
          <FriendTitle> <a href={url} target="_blank" rel="noreferrer">{title}</a></FriendTitle>
          <BoxFriendItem >
            <BoxFriendLogo>
              <img src={imageUrl} alt="Logo" className="FriendLogo" width="158" height="112"></img>
            </BoxFriendLogo>
            <BoxFriendInfo>
              <ul className="FriendInfoList">
          <FriendInfoItem onClick={toggleModal}>Time: {workDays ?
              (<WorkDays workDays={workDays} name={title} />) :
              (<p>--------------------------</p>)}
          </FriendInfoItem>
                <FriendInfoItem>Email: {email ? (<a href={hrefMail}>{email}</a>) : (<p>--------------------------</p>) }</FriendInfoItem>
                <FriendInfoItem>Phone: {phone ? (<a href={hreftel}>{phone}</a>) : (<p>--------------------------</p>) }</FriendInfoItem>
                <FriendInfoItem>Address: {address ? (<address><a href={addressUrl} target="_blank" rel="noreferrer">{address}</a></address>) : (<p>--------------------------</p>) }</FriendInfoItem>
              </ul>
      </BoxFriendInfo>
        {isOpen && (<Modal workDays={workDays} onClick={handleClose} />)}
      </BoxFriendItem>
  </>
}

export default OurFriendsItem