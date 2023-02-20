import styled from 'styled-components';
import { Link as StyledLink } from 'react-router-dom';

export const LinkRedirect = styled(StyledLink)`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: ${p => p.theme.radii.large};
  background-color: ${p => p.theme.colors.regModalActiveBtn};

  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.ms};
  font-weight: ${p => p.theme.fontWeight.medium};
  text-decoration: none;

  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  @media screen and (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  :hover {
    background-color: ${p => p.theme.colors.transparent};
    color: ${p => p.theme.colors.black};
    border: 1px solid rgba(245, 146, 86, 0.5);
  }
`;

export const Link = styled(StyledLink)`
  display: flex;
  justify-content: center;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 8px;
  padding-bottom: 8px;

  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.ms};
  font-weight: ${p => p.theme.fontWeight.medium};
  text-decoration: none;

  :hover {
    scale: 1.1;
  }
`;

export const GoogleIcon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

export const Text = styled.p`
  margin-bottom: 10px;
  text-align: center;
`;

export const TextWraper = styled.div`
  position: relative;
`;
