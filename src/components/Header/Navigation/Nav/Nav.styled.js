import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: 32px;
  line-height: 44px;

  &:not(:last-child) {
    margin-bottom: 40px;
    @media (min-width: ${p => p.theme.screenSizes.desktop}) {
      margin-bottom: 0;
    }
  }
  &:hover {
    color: ${p => p.theme.colors.hoverGoHome};
    transition: ${p => p.theme.transition.onHover};
    text-decoration: underline;
  }
  &.active {
    color: ${p => p.theme.colors.hoverGoHome};

    text-decoration: underline;
  }
  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    font-size: ${p => p.theme.fontSizes.ms};
    line-height: 27px;
    margin-left: 80px;
  }
`;
