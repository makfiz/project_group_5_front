import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding-top: 40px;
  padding-bottom: 25px;

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    padding-top: 20px;
    padding-bottom: 22px;
  }

  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    padding-top: 60px;
    padding-bottom: 25px;
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

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    font-size: ${p => p.theme.fontSizes.lm};
    line-height: 1.36;
    color: ${p => p.theme.colors.titleColor};
  }
`;

export const AddPetBoxWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    margin-right: 16px;
  }
`;

export const Text = styled.p`
  margin-right: 15px;
  align-items: center;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSizes.ms};
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.titleColor};

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    color: ${p => p.theme.colors.titleColor};
  }

  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    margin-right: 12px;
    color: ${p => p.theme.colors.titleColor};
  }
`;

export const AddPetBtn = styled.button`
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  border-radius: ${p => p.theme.radii.round};
  border: none;

  background-color: ${p => p.theme.colors.userAddPetBtnBg};

  transition: background-color ${p => p.theme.transition.onHover};

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.userAddPetBtnBgHover};
  }
`;
