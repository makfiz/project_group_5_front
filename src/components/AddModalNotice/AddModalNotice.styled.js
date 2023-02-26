import styled from 'styled-components';

import maleIcon from '../../assets/images/male.png';
import femaleIcon from '../../assets/images/female.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  @media screen and (min-width: 767px) {
    padding: 40px 80px;
  }
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
  padding: 11px;
  padding-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: thick;
  background-color: #fdf7f2;
  font-size: initial;
  fill: ${p => p.theme.colors.titleColor};
  &:hover,
  &:focus {
    fill: ${p => p.theme.colors.userAddPetBtnBgHover};
  }
  @media screen and (min-width: 767px) {
    top: 11px;
    right: 24px;
    width: 38px;
    height: 38px;
  }
`;

export const CloseCross = styled.svg`
  width: 20px;
  height: 20.5px;

  @media screen and (min-width: 767px) {
  }
`;

export const Title = styled.h3`
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

export const FirstForm = styled.div`
  margin-bottom: 40px;
`;

export const UserComment = styled.p`
  text-align: center;
  margin-bottom: 20px;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSizes[2]}px;
  line-height: 1.38;
  @media screen and (min-width: 768px) {
    width: 448px;
    margin: auto;
    margin-bottom: 28px;
    font-size: ${p => p.theme.fontSizes[4]}px;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 12px;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    width: 448px;
    margin-bottom: 28px;
    column-gap: 12px;
    row-gap: 16px;
  }
`;

export const RadioLabel = styled.label`
  /* margin-bottom: 4px; */
`;

export const RadioInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
  &:checked + div {
    background-color: ${p => p.theme.colors.hoverGoHome};
    color: #ffffff;
  }
`;

export const RadioButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 25px;
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeight.medium};
  letter-spacing: 0.04em;
  line-height: 1.36;
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    background-color: ${p => p.theme.colors.hoverGoHome};
    color: #ffffff;
  }

  @media screen and (min-width: 768px) {
    padding: 8px 26px;
    font-size: ${p => p.theme.fontSizes.ms};
    line-height: 1.35;
  }
`;

export const InputCont = styled.div`
  /* width: 100%; */
  box-sizing: border-box;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 28px;
    }
  }
`;

export const TextLabel = styled.label`
  display: inline-block;
  width: 100%;
  font-family: Manrope, sans-serif;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: 1.44;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const TextInput = styled.input`
  display: block;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  outline: none;
  border: 1px solid rgba(245, 146, 86, 0.5);
  width: 100%;
  height: 40px;
  margin-top: 8px;
  padding: 0;
  padding-left: 14px;
  border-radius: 40px;
  background-color: #fdf7f2;
  ::placeholder {
    font-family: 'Manrope, sans-serif';
    font-style: normal;
    font-weight: ${p => p.theme.fontWeight.regular};
    font-size: ${p => p.theme.fontSizes[1]}px;
    line-height: 1.4;
    color: rgba(27, 27, 27, 0.6);
  }
  @media screen and (min-width: 768px) {
    margin-top: 12px;
    width: 100%;
    height: 48px;
    padding-left: 16px;
    ::placeholder {
      font-size: ${p => p.theme.fontSizes[2]}px;
    }
  }
`;
export const InputContTextArea = styled.div``;

export const DateInput = styled.input`
  position: relative;
  display: block;
  box-sizing: border-box;
  padding-left: 14px;
  margin-top: 8px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  width: 100%;
  height: 40px;
  border-radius: 40px;
  ::placeholder {
    font-family: Manrope, sans-serif;
    font-style: normal;
    font-weight: ${p => p.theme.fontWeight.regular};
    font-size: ${p => p.theme.fontSizes[1]}px;
    line-height: 1.4;
    color: rgba(27, 27, 27, 0.6);
  }
  &::-webkit-calendar-picker-indicator {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    height: 48px;
    ::placeholder {
      font-size: ${p => p.theme.fontSizes[2]}px;
    }
  }
`;

export const TextAreaInput = styled.textarea`
  display: block;
  outline: none;
  box-sizing: border-box;
  resize: none;
  margin-top: 8px;
  width: 240px;
  padding: 12px 5px 12px 14px;
  border-radius: 20px;
  background-color: var(--main-bg-cl);
  border: 1px solid rgba(245, 146, 86, 0.5);
  font-size: 14px;
  @media screen and (min-width: 768px) {
    width: 448px;
  }
`;

//!======SECOND PAGE===============
export const SexFormBox = styled.fieldset`
  display: flex;
  margin-bottom: 32px;
  border: none;
  padding: 0;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const BoxQuestion = styled.legend`
  margin-bottom: 16px;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: 1.44;
  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
    font-size: ${p => p.theme.fontSizes[5]}px;
    line-height: 1.04;
  }
`;

export const Asterisk = styled.span`
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: 400px;
  line-height: 1.44;
  color: #f59256';

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[5]}px;
    line-height: 1.04;
  }
`;

export const SexLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: 1.44;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 40px;
  }
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[4]}px;
    &:not(:last-child) {
      margin-right: 80px;
    }
  }
`;

export const MaleIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
  background-image: url(${maleIcon});
  background-repeat: no-repeat;
  background-size: contain, cover;
  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }
`;
export const FeMaleIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
  background-image: url(${femaleIcon});
  background-repeat: no-repeat;
  background-size: contain, cover;
  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }
`;

export const InputRadio = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + label {
    color: #f59256';
  }
`;

export const PhotoPetInput = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const PhotoAddContainer = styled.label`
  width: 116px;
  height: 116px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  cursor: pointer;
  // margin: 0 auto;
  margin-right: auto;
  box-sizing: border-box;
  // padding: 22px;
  border-radius: 20px;
  background-color: #fdf7f2;
  @media screen and (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

export const ImageInputWrapper = styled.fieldset`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: none;
  padding: 0;
  margin-bottom: 28px;
`;

export const ImageTitle = styled.label`
  margin-bottom: 8px;
  font-weight: 500px;
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: 1.2;
  letter-spacing: -0.01em;
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[5]}px;
    line-height: 1.04;
  }
`;

export const AddedIamge = styled.div`
  overflow: hidden;
  display: flex;
  margin-right: auto;
  width: 116px;
  height: 116px;
  border-radius: 20px;
  & > img {
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  gap: 12px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
