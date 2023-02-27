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
  background-color: #ffffff;
  :hover,
  :focus {
    background-color: #f59256;
    color: #ffffff;
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &.active {
    background-color: #f59256;
    color: #ffffff;
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
  background-color: #f59256;
  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;
  color: #ffffff;
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover,
  :focus-visible {
    background-color: #ff6101;
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
  color: #111111;
  cursor: pointer;
  :hover,
  :focus-visible {
    div {
      background-color: #ff6101;
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
    background-color: #f59256;
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
