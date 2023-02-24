import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LoginBtn = styled(NavLink)`
  width: 95px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-decoration: none;
  border-radius: 40px;
  border: 2px solid ${p => p.theme.colors.hoverGoHome};
  background-color: ${p => p.theme.colors.hoverGoHome};

  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.titleColor};

  border-color: ${p => p.theme.colors.hoverGoHome};
  margin-right: 12px;
  &.active {
    background-color: ${p => p.theme.colors.hoverGoHome};
    color: ${p => p.theme.colors.white};
  }
  &:hover {
    transition: ${p => p.theme.transition.onHover};
    background-color: ${p => p.theme.colors.hoverGoHome};
    color: ${p => p.theme.colors.white};
  }
`;
export const RegisterBtn = styled(NavLink)`
  width: 144px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-decoration: none;
  border-radius: 40px;
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.titleColor};
  border: 2px solid ${p => p.theme.colors.hoverGoHome};
  border-color: ${p => p.theme.colors.hoverGoHome};
  &:hover {
    transition: ${p => p.theme.transition.onHover};
    background-color: ${p => p.theme.colors.hoverGoHome};
    color: ${p => p.theme.colors.white};
  }
  &.active {
    background-color: ${p => p.theme.colors.hoverGoHome};
    color: ${p => p.theme.colors.white};
  }
  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
  }
`;
