import styled from 'styled-components';

import { ReactComponent as Delete } from '../../../assets/icons/delete_pet.svg';

export const PetCard = styled.li`
  position: relative;

  padding: 20px;

  height: 540px;

  background-color: ${p => p.theme.colors.white};

  border-radius: ${p => p.theme.radii.medium};

  box-shadow: ${p => p.theme.shadows.regModalShadow};

  @media (min-width: ${p => p.theme.screenSizes.mobile}) {
    width: 280px;
    height: 540px;
  }

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    display: flex;

    width: 704px;

    height: 230px;
  }

  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    width: 821px;

    height: 100%;
  }
`;

export const ImgWrapper = styled.div`
  width: 240px;
  height: 240px;

  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;

  border-radius: ${p => p.theme.radii.medium};

  overflow: hidden;

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    flex-shrink: 0;
    width: 161px;
    height: 161px;

    margin-bottom: 0px;
    margin-right: 35px;
    margin-left: 0;
  }
`;

export const InfoWrapper = styled.div`
  overflow: auto;
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

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.38;
    color: ${p => p.theme.colors.titleColor};
  }
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

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.38;
    color: ${p => p.theme.colors.titleColor};
  }
`;

export const ModalDelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 50px;

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    width: 471px;
  }

  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    width: 580px;
  }
`;

export const DelBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const DeleteModalButton = styled.button`
  display: flex;
  justify-content: center;
  width: 70px;
  padding: 6px;
  background-color: ${p => p.theme.colors.transparent};
  cursor: pointer;
  font-family: inherit;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.57;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.black};

  border: 2px solid ${p => p.theme.colors.hoverGoHome};
  border-radius: ${p => p.theme.radii.large};
  transition: border-color ${p => p.theme.transition.onHover};
  transition: background-color ${p => p.theme.transition.onHover};
  transition: color ${p => p.theme.transition.onHover};

  :hover {
    border-color: ${p => p.theme.colors.deleteBtnColor};
    background-color: ${p => p.theme.colors.deleteBtnColor};
    color: ${p => p.theme.colors.white};
  }
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

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    top: 20px;
    right: 20px;

    width: 44px;
    height: 44px;

    background-color: #fdf7f2;
    border-radius: ${p => p.theme.radii.round};
  }
`;

export const DeleteIcon = styled(Delete)`
  fill: ${p => p.theme.colors.titleColor};

  transition: fill ${p => p.theme.transition.onHover};

  &:hover,
  &:focus {
    fill: ${p => p.theme.colors.userAddPetBtnBgHover};
  }
`;
