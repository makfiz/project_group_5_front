import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardButtonWrap = styled.div`
  padding-top: ${({ own }) => (own ? '20px' : '50px')};
  padding-bottom: ${({ own }) => (own ? '12px' : '32px')};

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

  transition: border-color 300ms ease-in-out, color 300ms ease-in-out;

  :hover {
    color: ${p => p.theme.colors.deleteBtnColor};
    border-color: ${p => p.theme.colors.deleteBtnColor};
  }
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
  cursor: pointer;

  border: 2px solid ${p => p.theme.colors.hoverGoHome};
  border-radius: ${p => p.theme.radii.large};
  transition: border-color 300ms ease-in-out;

  svg {
    fill: rgba(17, 17, 17, 0.6);
    transition: fill 300ms ease-in-out;
  }

  :hover {
    border-color: ${p => p.theme.colors.deleteBtnColor};

    span {
      color: ${p => p.theme.colors.deleteBtnColor};
    }

    svg {
      fill: ${p => p.theme.colors.deleteBtnColor};
    }
  }
`;

export const DeleteButtonText = styled.span`
  margin-right: 13px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeight.medium};
  line-height: 1.38;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.hoverGoHome};
  transition: color 300ms ease-in-out;
`;
