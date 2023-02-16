import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const size = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1280px',
};
export const LoginBtn = styled(NavLink)`
  width: 95px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-decoration: none;
  border-radius: 40px;
  border: 2px solid #f59256;
  background-color: #f59256;
  color: #fff;
  margin-right: 12px;
  &:focus {
    background-color: #fff;
    color: #181c27;

    border-color: #f59256;
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
  border: 2px solid #f59256;
  background-color: #f59256;
  color: #fff;

  &:focus {
    background-color: #fff;
    color: #181c27;

    border-color: #f59256;
  }
  @media (min-width: ${size.tablet}) {
    margin-right: 25px;
  }
`;
