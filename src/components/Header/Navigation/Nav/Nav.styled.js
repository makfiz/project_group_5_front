import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const size = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1280px',
};
export const Link = styled(NavLink)`
  text-decoration: none;
  color: #181c27;
  font-weight: 500;
  font-size: 32px;
  line-height: 44px;

  &:not(:last-child) {
    margin-bottom: 40px;
    @media (min-width: ${size.desktop}) {
      margin-bottom: 0;
    }
  }
  &:focus {
    color: #f59256;

    text-decoration: underline;
  }
  @media (min-width: ${size.desktop}) {
    font-size: 20px;
    line-height: 27px;
    margin-left: 80px;
  }
`;
