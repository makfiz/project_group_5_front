import { useDispatch } from 'react-redux';
import icons from 'assets/icons/icons.svg';
import petsOperations from 'redux/Pets/petsOperations';
import { PetImage,
  ImgAdd,
  InputFile,
  ImgBtn,
  FieldImgWrap,
  CameraIcon
} from './FieldPetImage.styled';

export const FieldPetImg = ({ petImage, _id }) => {
  const dispatch = useDispatch();

  const handleUpdateImg = async (e) => {
    const fileUploaded = e.target.files[0];
    const formData = new FormData();
    formData.append('petImage', fileUploaded);
      dispatch(
        petsOperations.updatePetImage({
          petId: _id,
          formData,
        })
      )
  };

  return (
    <FieldImgWrap>
      <div>
        <PetImage src={petImage} alt="pet" />
      </div>
      <ImgAdd>
        <InputFile type="file" name="petImage" id={_id} accept="image/*" onChange={(e) => handleUpdateImg(e)} />
        <ImgBtn htmlFor={_id}>
          <CameraIcon width="20" height="20">
            <use href={icons + '#icon-photoCamera'} />
          </CameraIcon>
        </ImgBtn>
      </ImgAdd>
    </FieldImgWrap>
  );
};
