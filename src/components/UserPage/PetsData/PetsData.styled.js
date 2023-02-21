import styled from 'styled-components';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: ${p => p.theme.screenSizes.mobile}) {
    width: 320px;
  }
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSizes.ms};
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.black};
`;

export const Text = styled.p`
  margin-right: 15px;
  align-items: center;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeight.medium};
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.titleColor};
`;

export const AddPetBtn = styled.button`
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  border-radius: ${p => p.theme.radii.round};
  border: none;

  background-color: ${p => p.theme.colors.userAddPetBtnBg};

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.userAddPetBtnBgHover};
  }
`;
