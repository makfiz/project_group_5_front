import styled from 'styled-components';
import { RxCross1 } from 'react-icons/rx';
// import { AiTwotoneHeart } from 'react-icons/ai';

export const Wraper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 280px;
  overflow: hidden;

  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.medium};

  @media screen and (min-width: 768px) {
    width: 704px;

    box-shadow: ${p => p.theme.shadows.regModalShadow};
    border-radius: ${p => p.theme.radii.large};
  }
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 60px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;

export const Icon = styled(RxCross1)`
  transition: color 300ms ease-in-out, transform 300ms ease-in-out;
`;

export const IconWraper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  background-color: ${p => p.theme.colors.closeIconColor};
  backdrop-filter: blur(2px);
  border-radius: 50%;

  cursor: pointer;

  :hover {
    svg {
      color: ${p => p.theme.colors.deleteBtnColor};
      transform: scale(1.1);
    }
  }
`;

export const ImageWraper = styled.div`
  position: relative;

  width: 240px;
  height: 240px;
  margin-bottom: 16px;

  border-bottom-left-radius: ${p => p.theme.radii.large};
  border-bottom-right-radius: ${p => p.theme.radii.large};
  background-color: silver;

  @media screen and (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0;
    width: 288px;
    height: 328px;
  }
`;

export const FavoriteWraper = styled.div`
  position: absolute;
  top: 20px;
  display: flex;
  align-items: center;
  width: 158px;
  height: 28px;

  background-color: ${p => p.theme.colors.favoriteBg};
  backdrop-filter: blur(50px);
  border-top-right-radius: ${p => p.theme.radii.large};
  border-bottom-right-radius: ${p => p.theme.radii.large};
`;

export const FavotiteType = styled.p`
  padding-left: 20px;
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: 12px;
  line-height: 1.34;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.titleColor};
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.38;
  letter-spacing: -0.01em;

  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    max-width: 320px;
    font-size: ${p => p.theme.fontSizes.lm};
    line-height: 1.36;
  }
`;

export const CommentsTitle = styled.p`
  display: inline-block;
  font-weight: 600;
  line-height: 1.36;
  font-size: ${p => p.theme.fontSizes.s};
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.5;
    letter-spacing: 0.04em;
  }
`;

export const CommentsText = styled.p`
  display: inline-block;

  font-weight: ${p => p.theme.fontWeight.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.36;
  text-align: justify;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.5;
    letter-spacing: 0.04em;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 40px;
  font-family: inherit;

  background-color: ${p => p.theme.colors.regModalActiveBtn};
  border: 2px solid transparent;
  border-radius: ${p => p.theme.radii.large};
  cursor: pointer;
  transition: border-color 300ms ease-in-out, box-shadow 300ms ease-in-out;

  :hover {
    border-color: ${p => p.theme.colors.deleteBtnColor};
    box-shadow: 0px 0px 2px 2px rgba(245, 146, 86, 0.6);
  }

  span {
    font-weight: ${p => p.theme.fontWeight.medium};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.white};
    line-height: 1.38;
    letter-spacing: 0.04em;
  }

  svg {
    /* fill: ${p => p.theme.colors.regModalActiveBtn}; */
    fill: ${p => p.theme.colors.white};
    stroke: ${p => p.theme.colors.regModalActiveBtn};
    transition: fill 300ms ease-in-out, stroke 300ms ease-in-out;
  }

  :last-child {
    border: 2px solid ${p => p.theme.colors.regModalActiveBtn};
    background-color: ${p => p.theme.colors.white};

    span {
      margin-right: 8px;
      color: ${p => p.theme.colors.titleColor};
    }

    :hover {
      border-color: ${p => p.theme.colors.deleteBtnColor};
      box-shadow: 0px 0px 2px 2px rgba(245, 146, 86, 0.6);

      svg {
        fill: ${p => p.theme.colors.deleteBtnColor};
        stroke: ${p => p.theme.colors.deleteBtnColor};
      }
    }
  }

  @media screen and (max-width: 767px) {
    :not(:last-child) {
      margin-bottom: 12px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 160px;
    margin-right: 12px;

    :not(:last-child) {
      order: 1;
      margin-right: 0;
    }
  }
`;

export const MoreInfoWraper = styled.div`
  display: flex;
`;

export const ContentWraper = styled.div`
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 28px;
  }
`;

export const Layout = styled.div``;

export const ButtonWraper = styled.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
  }
`;

export const LeftPartWraper = styled.div`
  margin-right: 50px;
`;
export const RightPartWraper = styled.div``;

export const List = styled.ul``;

export const ListItemTitle = styled.li`
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.36;
  color: ${p => p.theme.colors.black};

  :not(:last-child) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const ListItem = styled.li`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeight.medium};
  line-height: 1.36;
  color: ${p => p.theme.colors.black};

  :not(:last-child) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const Img = styled.img`
  display: block;
  width: 240px;
  height: 240px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 288px;
    height: 328px;
  }
`;
