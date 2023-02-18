import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListWrap = styled.div`
  padding: 30px 20px;

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    padding: 60px 32px;
  }

  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    padding: 60px 16px;
  }
`;

export const List = styled.ul`
  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    display: flex;
    flex-wrap: wrap;
    margin: -16px;
  }
  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    max-width: 768px;
  }
  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    max-width: 1280px;
  }
`;
export const ListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 32px;
    @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    margin: 16px;
  }
`;

export const ImgWrap = styled.div`
  position: relative;
  width: 280px;
  height: 288px;
  overflow: hidden;

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    width: 336px;
  }
  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    width: 288px;
  }
`;
export const ImgBadge = styled.p`
  position: absolute;
  top: 20px;
  left: 0;
  width: 118px;

  padding: 6px 20px 7px;
  /* TODO: in sell text in the center */
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border-top-right-radius: ${p => p.theme.radii.large};
  border-bottom-right-radius: ${p => p.theme.radii.large};

  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeight.medium};
  line-height: 1.25;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.titleColor};

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    padding: 6px 20px 6px;
    line-height: 1.33;
  }
`;

export const AddInFavoriteBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  width: 44px;
  height: 44px;
  border-radius: ${p => p.theme.radii.round};
  border: 0;

  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  background-size: cover;
`;

export const TextWrap = styled.div`
  width: 240px;
  padding: 20px 20px 0px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.inputShadow};
  border-bottom-left-radius: ${p => p.theme.radii.medium};
  border-bottom-right-radius: ${p => p.theme.radii.medium};

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    width: 296px;
    border-bottom-left-radius: ${p => p.theme.radii.large};
    border-bottom-right-radius: ${p => p.theme.radii.large};
  }
  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    width: 248px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: ${p => p.theme.fontSizes.lm};
  font-weight: ${p => p.theme.fontWeight.bold};
  line-height: 1.36;
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.titleColor};
`;

export const ListsWrap = styled.div`
  display: flex;
`;

export const DescriptionFieldList = styled.ul``;
export const DescriptionDefinitionList = styled.ul`
  margin-left: 40px;

  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    margin-left: 37px;
  }
`;

export const DescriptionItem = styled.li`
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
export const DescriptionText = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeight.medium};
  line-height: 1.38;
  color: ${p => p.theme.colors.titleColor};
`;

export const CardButtonWrap = styled.div`
  padding-top: ${p => (p.own ? '20px' : '50px')};
  padding-bottom: ${p => (p.own ? '12px' : '32px')};

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    padding-left: 0;
    padding-right: 0;
  }
`;
export const LearnMoreLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 6px;
  padding-bottom: 6px;

  border: 2px solid ${p => p.theme.colors.hoverGoHome};
  border-radius: ${p => p.theme.radii.large};
  text-decoration: none;

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeight.medium};
  line-height: 1.38;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.hoverGoHome};
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  width: 100%;
  padding-top: 6px;
  padding-bottom: 6px;
  background-color: transparent;

  border: 2px solid ${p => p.theme.colors.deleteBtnColor};
  border-radius: ${p => p.theme.radii.large};
`;

export const DeleteButtonText = styled.span`
  margin-right: 13px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeight.medium};
  line-height: 1.38;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.deleteBtnColor};
`;

export const AddPetMobileButton = styled.div`
  position: fixed;
  top: 73%;
  left: 69%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: ${p => p.theme.radii.round};
  border: 0;
  background-color: ${p => p.theme.colors.hoverGoHome};

  @media screen and (min-width: 400px) {
    transform: translateX(-20%);
  }
  @media screen and (min-width: 500px) {
    transform: translateX(-44%);
  }
  @media screen and (min-width: 600px) {
    transform: translateX(-68%);
  }
  @media screen and (min-width: 700px) {
    transform: translateX(-90%);
  }

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    display: none;
  }
`;

export const AddPetMobileButtonText = styled.span`
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeight.medium};
  line-height: 1.33;
  color: ${p => p.theme.colors.white};
`;
