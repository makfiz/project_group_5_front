import styled from 'styled-components';

import { MdOutlineEdit, MdOutlineDone } from 'react-icons/md';

export const UserDataItemWrapper = styled.div`
  position: relative;
  display: flex;
  width: 280px;
  height: 24px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 12px;
  padding-top: 0px;
  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    width: 768px;
    margin-bottom: 15px;
  }
  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    width: 1280px;
  }
`;

export const UserInfoWrapper = styled.div`
  display: block;
  max-width: 280px;
  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    max-width: 379px;
  }
`;

export const UserInfoLabel = styled.label`
  /* display: block; */
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #111111;

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const EditInput = styled.input`
  position: absolute;
  left: 82px;
  height: 24px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    font-size: 18px;
    line-height: 25px;
    width: 216px;
    height: 32px;
  }

  &:focus {
    outline: none;
  }
`;

export const ShowInput = styled.input`
  position: absolute;
  left: 82px;
  height: 24px;
  border-style: none;
  background: #ffffff;
`;

export const EditButton = styled.button`
  position: absolute;
  top: 5px;
  left: 253px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border-style: none;
  background: #fdf7f2;
  backdrop-filter: blur(2px);
  cursor: pointer;
`;

export const DoneButton = styled.button`
  position: absolute;
  top: 5px;
  left: 253px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border-style: none;
  background: #fdf7f2;
  backdrop-filter: blur(2px);
  cursor: pointer;
`;

export const EditIcon = styled(MdOutlineEdit)`
  color: ${p => p.theme.colors.regModalActiveBtn};
`;

export const DoneIcon = styled(MdOutlineDone)`
  color: ${p => p.theme.colors.regModalActiveBtn};
`;
