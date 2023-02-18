import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Form as FormicForm,
  Field,
  ErrorMessage as ErrorFormicError,
} from 'formik';

export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${p => p.theme.colors.transparent};

  @media screen and (min-width: 768px) {
    width: 608px;
    padding-top: 60px;
    padding-bottom: 60px;

    background-color: ${p => p.theme.colors.regModBack};
    box-shadow: ${p => p.theme.shadows.regModalShadow};
    border-radius: ${p => p.theme.radii.large};
  }
  @media screen and (min-width: 1280px) {
    width: 618px;
  }
`;

export const ButtonWraper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  margin-top: 40px;
`;

export const LinkWraper = styled.div`
  display: flex;
  justify-content: center;
`;

export const LinkText = styled.p`
  margin-right: 6px;
  font-family: 'Manrope';
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.regModalLinkText};
`;

export const NavLink = styled(Link)`
  font-family: 'Manrope';
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.regModalLink};
`;

export const StyledButton = styled.button`
  width: 280px;
  height: 44px;

  background-color: ${p => p.theme.colors.regModalActiveBtn};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.large};
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 448px;
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
`;

export const Form = styled(FormicForm)`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

export const Input = styled(Field)`
  width: 280px;
  background-color: ${p => p.theme.colors.transparent};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: ${p => p.theme.radii.large};
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 14px;

  @media screen and (min-width: 768px) {
    width: 448px;
    background-color: #fdf7f2;
    padding-left: 32px;
    padding-top: 14px;
    padding-bottom: 14px;
  }

  @media screen and (min-width: 1280px) {
    width: 458px;
  }

  :not(:last-child) {
    margin-bottom: 16px;
  }
  ::placeholder {
    color: ${p => p.theme.colors.regModalplaceholderColor};
    font-size: ${p => p.theme.fontSizes.s};
  }
`;

export const ErrorMessage = styled(ErrorFormicError)`
  color: ${p => p.theme.colors.error};
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-left: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.s};

  @media screen and (min-width: 768px) {
    margin-left: ${p => p.theme.space[5]}px;
  }
`;
