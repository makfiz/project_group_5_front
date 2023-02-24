import styled from 'styled-components';
import { RxCross1 } from 'react-icons/rx';
import { AiTwotoneHeart } from 'react-icons/ai';

export const Wraper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 280px;

  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.medium};

  @media screen and (min-width: 768px) {
    width: 704px;

    box-shadow: ${p => p.theme.shadows.regModalShadow};
    border-radius: ${p => p.theme.radii.large};
  }
  @media screen and (min-width: 1280px) {
    width: 618px;
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

export const Icon = styled(RxCross1)``;

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
  margin-bottom: 16px;

  background-color: ${p => p.theme.colors.favoriteBg};
  backdrop-filter: blur(50px);
  border-top-right-radius: ${p => p.theme.radii.large};
  border-bottom-right-radius: ${p => p.theme.radii.large};
`;

export const FavotiteType = styled.p`
  margin-left: 20px;
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeight.medium};
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSizes.l};

  color: ${p => p.theme.colors.black};

  @media screen and(min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const CommentsTitle = styled.p`
  display: inline-block;
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.s};
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const CommentsText = styled.p`
  display: inline-block;
  margin-bottom: 40px;

  font-weight: ${p => p.theme.fontWeight.normal};
  font-size: ${p => p.theme.fontSizes.s};
  text-align: justify;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 40px;

  background-color: ${p => p.theme.colors.regModalActiveBtn};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.large};
  border: none;
  cursor: pointer;

  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSizes.m};

  @media screen and (min-width: 768px) {
    width: 160px;

    :not(:last-child) {
      margin-right: 12px;
    }
  }

  &:hover {
    border: 2px solid #f59256;
    background-color: transparent;
    color: ${p => p.theme.colors.black};
  }
  &:active {
    border: 2px solid #f59256;
    background-color: transparent;
    color: ${p => p.theme.colors.black};
  }
  :not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const MoreInfoWraper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
`;

export const ContentWraper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Layout = styled.div``;

export const ButtonWraper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const HeartIcon = styled(AiTwotoneHeart)`
  color: ${p => p.theme.colors.userAddPetBtnBg};
  margin-left: 10px;
`;

export const LeftPartWraper = styled.div`
  margin-right: 50px;
`;
export const RightPartWraper = styled.div``;

export const List = styled.ul``;

export const ListItemTitle = styled.li`
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.s};
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ListItem = styled.li`
  font-size: ${p => p.theme.fontSizes.s};
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
