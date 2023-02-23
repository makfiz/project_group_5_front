import styled from 'styled-components';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;

  padding: 40px 20px 25px 20px;

  @media (min-width: ${p => p.theme.screenSizes.mobile}) {
    width: ${p => p.theme.screenSizes.mobile};
  }

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    width: ${p => p.theme.screenSizes.tablet};

    padding: 20px 32px 22px 32px;
  }

  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    width: 100%;
    padding: 60px 32px 24px 32px;
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

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.userAddPetBtnBgHover};
  }
`;
