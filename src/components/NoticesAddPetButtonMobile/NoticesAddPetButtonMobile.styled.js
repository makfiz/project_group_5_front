import styled from 'styled-components';

export const AddPetMobileButton = styled.div`
  position: fixed;
  top: 73%;
  left: 69%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: ${p => p.theme.radii.round};
  border: 0;
  background-color: ${p => p.theme.colors.hoverGoHome};

  @media screen and (min-width: 400px) {
    transform: translateX(-20%);
  }
  @media screen and (min-width: 500px) {
    transform: translateX(-44%);
  }
  @media screen and (min-width: 600px) {
    transform: translateX(-68%);
  }
  @media screen and (min-width: 700px) {
    transform: translateX(-90%);
  }

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    display: none;
  }
`;

export const AddPetMobileButtonText = styled.span`
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeight.medium};
  line-height: 1.33;
  color: ${p => p.theme.colors.white};
`;
