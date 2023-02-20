import styled from 'styled-components';

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
  display: flex;
  justify-content: ${({ category }) =>
    category === 'sell' ? 'center' : 'flex-start'};

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

export const DescriptionDefinitions = styled.ul`
  margin-left: 40px;
  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    margin-left: 37px;
  }
`;