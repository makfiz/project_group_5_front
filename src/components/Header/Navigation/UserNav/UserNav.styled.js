import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as AccountBtnIconComp } from '../../../../assets/icons/accountBtnIcon.svg';
export const AccountBtn = styled(NavLink)`
  width: 165px;
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
  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
  }
  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    margin-right: 0;
  }
  &:hover {
    transition: ${p => p.theme.transition.onHover};
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.titleColor};
    ${AccountBtnIconComp} path {
      transition: ${p => p.theme.transition.onHover};
      fill: ${p => p.theme.colors.hoverGoHome};
    }
    border-color: ${p => p.theme.colors.hoverGoHome};
  }
`;

export const AccountBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const AccountBtnText = styled.p`
  margin-left: 14px;
`;
export const AccountBtnIcon = styled(AccountBtnIconComp)`
  ${props =>
    css`
      path {
        fill: ${p => p.theme.colors.white};
      }
    `}
`;
