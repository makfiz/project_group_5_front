import styled from 'styled-components';

export const ButtonStyles = `display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 28px;
  font-size: 14px;
  letter-spacing: 0.04em;
  line-height: 1.35;
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  `;

export const ButtonBasic = styled.button`
  ${ButtonStyles};

  @media screen and (min-width: 768px) {
    margin-right: 20px;
    width: 180px;
    height: 44px;
  }
  font-weight: ${p => p.theme.fontWeight.medium};
  font-family: Manrope, sans-serif;
  background-color: ${p => p.theme.colors.white};
  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: ${p => p.theme.colors.userAddPetBtnBg};
    color: ${p => p.theme.colors.white};
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &.active {
    background-color: ${p => p.theme.colors.userAddPetBtnBg};
    color: ${p => p.theme.colors.white};
    border-color: ${p => p.theme.colors.userAddPetBtnBg};
  }
`;

export const LinkBasic = styled.a`
  ${ButtonStyles};
  font-weight: ${p => p.theme.fontWeight.medium};
  font-family: Manrope, sans-serif;
  background-color: ${p => p.theme.colors.black};
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.hoverGoHome};
    color: ${p => p.theme.colors.black};
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &.active {
    background-color: ${p => p.theme.colors.hoverGoHome};
    color: ${p => p.theme.colors.black};
  }
`;

export const AddLinkCircle = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  background-color: ${p => p.theme.colors.hoverGoHome};
  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;
  color: ${p => p.theme.colors.white};
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover,
  :focus-visible {
    background-color: ${p => p.theme.colors.deleteBtnColor};
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const AddLinkBasic = styled.a`
  display: flex;
  align-items: center;
  border: none;
  font-family: Manrope, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.35;
  background-color: transparent;
  color: ${p => p.theme.colors.titleColor};
  cursor: pointer;
  :hover,
  :focus-visible {
    div {
      background-color: ${p => p.theme.colors.deleteBtnColor};
      transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-left: 15px;
    width: 40px;
    height: 40px;
    background-color: ${p => p.theme.colors.regModalActiveBtn};
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
