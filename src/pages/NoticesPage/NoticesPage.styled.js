import styled from 'styled-components';
import { FaArrowAltCircleUp } from 'react-icons/fa';

export const ToTopButton = styled.button`
  position: fixed;
  right: 35px;
  bottom: 50px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    bottom: 100px;
    right: 20px;
  }
`;

export const Icon = styled(FaArrowAltCircleUp)`
  opacity: 0.6;
  color: #ff6b01;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  transition: scale 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    opacity: 1;
    scale: 1.2;
  }
`;
