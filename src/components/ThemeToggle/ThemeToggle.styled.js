import styled from 'styled-components';
import { themeDark } from 'utils/theme';

export const ToggleContainer = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 25px;
`;

export const ToggleBtn = styled.button`
  width: 40px;
  height: 22px;
  background-color: ${props => props.theme.colors.userAddPetBtnBg};
  border: none;
  border-radius: 10px;
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const ToggleSwitch = styled.span`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.userAddPetBtnBgHover};
  transition: transform 0.2s;
  transform: translateX(${props => (props.theme === themeDark ? '17px' : '0')});
`;
