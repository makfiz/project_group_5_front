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
  color: ${p => p.theme.colors.white};
  margin-right: 12px;
  &.active {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.titleColor};

    border-color: ${p => p.theme.colors.hoverGoHome};
  }
  &:hover {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.titleColor};

    border-color: ${p => p.theme.colors.hoverGoHome};
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
  border: 2px solid ${p => p.theme.colors.hoverGoHome};
  background-color: ${p => p.theme.colors.hoverGoHome};
  color: ${p => p.theme.colors.white};
  &:hover {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.titleColor};

    border-color: ${p => p.theme.colors.hoverGoHome};
  }
  &.active {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.titleColor};

    border-color: ${p => p.theme.colors.hoverGoHome};
  }
  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
  }
`;
