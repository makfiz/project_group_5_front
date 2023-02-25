import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/operations';
import {
  EditPhotoButton,
  EditPhotoIcon,
  EditPhotoButtonText,
} from './UserPhoto.styled';
import icons from '../../../assets/icons/icons.svg';
import {
  AvatarHolder,
  AddCross,
  Avatar,
  AddPhoto,
  Wrap,
} from 'components/UserPage/UserData/UserPhoto.styled';

export function UserPhoto({ user }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [img, setImg] = useState(null);

  const { avatarURL } = user;

  const handleEditClick = e => {
    e.preventDefault();
    setIsEditing(!isEditing);
    document.getElementById('addPhotoField').click();
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData();
    formData.append('avatar', form.elements[0].files[0]);
    dispatch(authOperations.userUpload(formData));
    setIsEditing(!isEditing);
  };

  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit}>
      <Wrap>
        <AvatarHolder>
          {!avatarURL ? (
            <AddCross>
              <svg>
                <use href={icons + '#icon-bigPlus'} />
              </svg>
            </AddCross>
          ) : (
            <Avatar src={avatarURL} alt="avatar" />
          )}
          <AddPhoto
            id="addPhotoField"
            type="file"
            accept="image/*"
            // disabled={!isEditing}
            onChange={e => {
              setImg(URL.createObjectURL(e.target.files[0]));
            }}
          />
        </AvatarHolder>
      </Wrap>
      {isEditing ? (
        <EditPhotoButton type="submit">
          <EditPhotoIcon />
          <EditPhotoButtonText>Send photo</EditPhotoButtonText>
        </EditPhotoButton>
      ) : (
        <EditPhotoButton type="button" onClick={handleEditClick}>
          <EditPhotoIcon />
          <EditPhotoButtonText>Edit photo</EditPhotoButtonText>
        </EditPhotoButton>
      )}
    </form>
  );
}
