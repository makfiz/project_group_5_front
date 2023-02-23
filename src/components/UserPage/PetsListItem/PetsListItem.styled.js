import styled from 'styled-components';

import { ReactComponent as Delete } from '../../../assets/icons/delete_pet.svg';

export const PetCard = styled.li`
  position: relative;

  padding: 20px;

  background-color: ${p => p.theme.colors.white};

  border-radius: ${p => p.theme.radii.medium};

  box-shadow: ${p => p.theme.shadows.regModalShadow};

  @media (min-width: ${p => p.theme.screenSizes.mobile}) {
    width: 240px;
    height: 540px;
  }
`;

export const ImgWrapper = styled.div`
  width: 240px;
  height: 240px;
  margin-bottom: 20px;

  border-radius: ${p => p.theme.radii.medium};

  overflow: hidden;
`;

export const InfoWrapper = styled.div`
  overflow-y: auto;
`;

export const InfoTitle = styled.p`
  margin-bottom: 12px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.black};
`;

export const InfoText = styled.span`
  font-weight: ${p => p.theme.fontWeight.normal};
`;

export const CommentsTitle = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.57;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.black};
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 272px;
  right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;

  border: none;
  background-color: transparent;

  cursor: pointer;
`;

export const DeleteIcon = styled(Delete)`
  fill: ${p => p.theme.colors.titleColor};

  transition: fill 250ms linear;

  &:hover,
  &:focus {
    fill: ${p => p.theme.colors.userAddPetBtnBgHover};
  }
`;
