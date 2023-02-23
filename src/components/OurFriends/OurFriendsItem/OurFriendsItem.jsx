import React, { useState, useEffect } from "react";

import Modal from "../Modal/Modal";
import { FriendTitle, BoxFriendItem, BoxFriendLogo, BoxFriendInfo, FriendInfoItem } from "./OurFriendsItem.styled";
import WorkDays from "./WorkDays";
import noPhoto from '../../../assets/default-img/defaultLogo.jpg';

const OurFriendsItem = ({ friend }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleKeyPress = (event) => {
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
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const {
    title,
    imageUrl = noPhoto,
    address,
    email,
    phone,
    workDays,
    addressUrl,
    url
  } = friend;

  const mailto = 'mailto:' 
  const tel = 'tel:'
  const hrefMail = mailto.concat(email) 
  const hreftel = tel.concat(phone)

  return <>
    <FriendTitle>
      <a href={url} target="_blank" rel="noreferrer">{title}</a>
    </FriendTitle>
    <BoxFriendItem >
      <BoxFriendLogo>
        {imageUrl ?
          <img src={imageUrl}
          alt="Logo"
          className="FriendLogo"
          width="110" height="78"
        ></img> : <img src={noPhoto}
          alt="Logo"
          className="FriendLogo"
          width="110" height="78"
        />}
      </BoxFriendLogo>
      <BoxFriendInfo>
        <ul className="FriendInfoList">
          <FriendInfoItem onClick={toggleModal}>
            Time:
          <br />
            {workDays ?
              (<WorkDays workDays={workDays} />) :
              (<p>Closed now</p>)}
          </FriendInfoItem>
          <FriendInfoItem>
            Email:
          <br />
            {email ?
              (<a href={hrefMail}>{email}</a>) :
              (<p>Don't have an email</p>)}
          </FriendInfoItem>
          <FriendInfoItem>
            Phone:
          <br />
            {phone ? 
              (<a href={hreftel}>{phone}</a>) :
              (<p>Don't have a phone number</p>)}
          </FriendInfoItem>
          <FriendInfoItem>
            Address:
          <br />
            {address ?
              (<address>
                <a href={addressUrl} target="_blank" rel="noreferrer">{address}</a>
              </address>) :
              (<p>Don't have an address</p>)}
          </FriendInfoItem>
        </ul>
      </BoxFriendInfo>
        {isOpen && (<Modal workDays={workDays} onClick={closeModal}/>)}
    </BoxFriendItem>
  </>
}

export default OurFriendsItem