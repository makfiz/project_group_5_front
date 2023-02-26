import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
export const AccountBtn = styled(NavLink)`
  width: 165px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-decoration: none;
  border-radius: 40px;
  transition: ${p => p.theme.transition.onHover};
  border: 2px solid ${p => p.theme.colors.hoverGoHome};
  background-color: ${p => p.theme.colors.hoverGoHome};
  color: ${p => p.theme.colors.white};
  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
  }
  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    margin-right: 0;
  }
  svg path {
    fill: ${p => p.theme.colors.white};
    transition: ${p => p.theme.transition.onHover};
  }
  &:hover {
    transition: ${p => p.theme.transition.onHover};
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.titleColor};
    svg path {
      transition: ${p => p.theme.transition.onHover};
      fill: ${p => p.theme.colors.hoverGoHome};
    }
    border-color: ${p => p.theme.colors.hoverGoHome};
  }
  svg {
    fill: ${p => p.theme.colors.white};
  }
`;

export const AccountBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const AccountBtnText = styled.p`
  margin-left: 14px;
`;
