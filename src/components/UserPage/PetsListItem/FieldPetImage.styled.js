import styled from 'styled-components';

export  const FieldImgWrap = styled.div`
 position: relative;
`

export const PetImage = styled.img`
  width: 240px;
  height: 240px;
 

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    width: 161px;
    height: 161px;
  }
`;

export const ImgAdd = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
` 
export const InputFile = styled.input`
  max-width: 0;
  opacity: 0;
  visibility: hidden;
  position: absolute;
`
export const ImgBtn = styled.label`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.favoriteBg};
  border-radius: 50px;
  border-color: transparent;
  outline: none;
`
export const CameraIcon = styled.svg`
  fill: ${p => p.theme.colors.regModalLinkText};
  transition: fill 250ms linear;

  &:hover,
  &:focus {
    fill: ${p => p.theme.colors.userAddPetBtnBgHover};
  }
`;