import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const Container = styled.div`
  background-color: ${p => p.theme.colors.white};
  width: 280px;
  border-radius: ${p => p.theme.radii.medium};
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: ${p => p.theme.shadows.hoursWorkModalShadow};
  @media screen and (min-width: 767px) {
    width: 608px;
  }
`;

export const Title = styled.p`
  margin-bottom: 20px;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 33px;
  color: ${p => p.theme.colors.titleColor};
  text-align: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: ${p => p.theme.fontSizes.ls};
  }
`;

export const CloseCross = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${p => p.theme.colors.titleColor};
  transition: fill 250ms linear;
  &:hover,
  &:focus {
    fill: ${p => p.theme.colors.userAddPetBtnBgHover};
  }
  @media screen and (min-width: 767px) {
    width: 20px;
    height: 20px;
  }
`;
export const BtnClose = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fdf7f2;
  border: none;
  @media screen and (min-width: 767px) {
    width: 44px;
    height: 44px;
  }
`;
export const Wrapper = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 767px) {
    padding: 40px;
  }
`;
export const BtnStyle = styled.button`
  width: 240px;
  height: 40px;
  background-color: ${p => p.theme.colors.hoverGoHome};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.large};
  border: none;
  cursor: pointer;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSizes.m};
  @media screen and (min-width: 768px) {
    width: 180px;
  }
  &:hover,
  &:active {
    transition: box-shadow 250ms ease-out;
    box-shadow: 0px 0px 2px 3px rgba(245, 146, 86, 0.6);
  }
  :not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const BtnStyleEmpt = styled.button`
  width: 240px;
  height: 40px;
  background-color: ${p => p.theme.colors.transparent};
  color: ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.large};
  border: 2px solid #f59256;
  cursor: pointer;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSizes.m};
  @media screen and (min-width: 768px) {
    width: 180px;
  }
  &:hover,
  &:active {
    transition: box-shadow 250ms ease-out;
    box-shadow: 0px 0px 2px 3px rgba(245, 146, 86, 0.6);
  }
  :not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
  @media screen and (min-width: 767px) {
    flex-direction: row-reverse;
    justify-content: center;
  }
`;
export const BtnWrapperNext = styled.div`
  margin-bottom: 12px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-left: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 24px;
  }
`;
export const Input = styled(Field)`
  width: 240px;
  background-color: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: ${p => p.theme.radii.large};
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 14px;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 26px;
  outline: none;
  @media screen and (min-width: 768px) {
    width: 448px;
    padding-left: 16px;
  }
  &:hover,
  &:active {
    border: 2px solid #f59256;
    background-color: transparent;
    color: ${p => p.theme.colors.black};
  }
  ::placeholder {
    color: ${p => p.theme.colors.petModalplaceholder};
    font-size: ${p => p.theme.fontSizes.s};
    @media screen and (min-width: 768px) {
      font-size: ${p => p.theme.fontSizes.m};
    }
  }
`;

export const InputWrapper = styled.div`
  :not(:last-child) {
    margin-bottom: 16px;

    @media screen and (min-width: 768px) {
      margin-bottom: 28px;
    }
  }
`;
export const PetLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  fontsize: 18px;
  font-weight: 500;
  line-height: 26, 5px;
  @media screen and (min-width: 768px) {
    margin-bottom: 12px;
    fontsize: 24px;
  }
`;
export const AddImgTitle = styled.p`
  text-align: center;
  color: ${p => p.theme.colors.titleColor};
  fontsize: 18px;
  font-weight: 500;
  line-height: 21, 86px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    line-height: 27, 32px;
    fontsize: 20px;
  }
`;

export const AddImgBtn = styled.button`
  position: relative;
  width: 208px;
  height: 208px;
  background: #fdf7f2;
  border-radius: 20px;
  margin: 0 auto;
  border: none;
  overflow: hidden;
  justify-content: center;

  @media screen and (min-width: 767px) {
    width: 182px;
    height: 182px;
  }
`;
export const AddCross = styled.svg`
  position: absolute;
  top: 80px;
  right: 75px;
  width: 48px;
  height: 48px;

  @media screen and (min-width: 767px) {
    top: 65px;
    right: 63px;
  }
`;

export const AddImg = styled.img`
  min-width: 182px;
  min-height: 182px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
`;

export const AddPhoto = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
`;

export const ComentsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  @media screen and (min-width: 767px) {
    margin-top: 40px;
  }
`;
export const TextArea = styled(Field)`
  padding-top: 12px;
  padding-left: 14px;
  width: 240px;
  height: 100px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: ${p => p.theme.radii.medium};
  margin-top: 8px;
  resize: none;
  outline: none;
  @media screen and (min-width: 767px) {
    width: 394px;
    height: 116px;
    margin-top: 12px;
  }
  &:hover,
  &:active {
    border: 2px solid #f59256;
    background-color: transparent;
    color: ${p => p.theme.colors.black};
  }
  ::placeholder {
    color: ${p => p.theme.colors.petModalplaceholder};
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const Error = styled(ErrorMessage)`
  color: ${p => p.theme.colors.error};
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-left: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.s};
  @media screen and (min-width: 768px) {
    margin-left: ${p => p.theme.space[5]}px;
  }
`;

export const ErrorImg = styled.p`
  color: ${p => p.theme.colors.error};
  font-size: ${p => p.theme.fontSizes.s};
  text-align: center;
  padding-top: 7px;
`;
