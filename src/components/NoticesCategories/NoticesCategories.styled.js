import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BoxMessage = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 45px;
  padding-right: 45px;
`;

export const Message = styled.h3`
  padding-top: 10px;
  display: inline-flex;
  font-weight: ${p => p.theme.fontWeight.fw500};
  font-size: ${p => p.theme.fontSize.fs16};
  @media (min-width: 768px) {
    padding-top: 50px;
    font-size: ${p => p.theme.fontSize.fs24};
  }
`;

export const CategoriesWrap = styled.div`
  padding: 0 20px;
  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    padding: 0 32px;
    display: flex;
    justify-content: space-between;
  }
  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    padding: 0 16px;
    width: 1280px;
  }
`;

export const CategoriesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -6px;

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    margin: -8px -6px;
  }
  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    margin: -6px;
  }
`;

export const CategoriesItem = styled.li`
  display: block;
  margin: 6px;

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    margin: 8px 6px;
  }
  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    margin: 6px;
  }
  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    :nth-child(3) {
      order: -1;
    }
  }
`;

export const CategoryLink = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 6px 26px;
  background-color: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.hoverGoHome};
  border-radius: ${p => p.theme.radii.large};
  cursor: pointer;
  text-decoration: none;

  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeight.medium};
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.titleColor};

  &.active {
    background-color: ${p => p.theme.colors.hoverGoHome};
    color: ${p => p.theme.colors.white};
  }

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    padding: 8px 26px;
    font-size: ${p => p.theme.fontSizes.ms};
    line-height: 1.35;
  }
`;

export const AddPetBtn = styled.button`
  display: none;
  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    display: inline-flex;
    align-self: flex-start;
    align-items: center;
    flex-shrink: 0;
    border: 0;
    margin-left: 50px;
    cursor: pointer;

    font-size: ${p => p.theme.fontSizes.ms};
    font-weight: ${p => p.theme.fontWeight.medium};
    line-height: 1.35;
    letter-spacing: 0.04em;
    color: ${p => p.theme.colors.titleColor};
    background-color: transparent;
  }
`;

export const AddPetBtnIconWrap = styled.span`
  display: none;
  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-left: 12px;
    width: 44px;
    height: 44px;
    background-color: ${p => p.theme.colors.hoverGoHome};
    border-radius: ${p => p.theme.radii.round};
  }
`;
