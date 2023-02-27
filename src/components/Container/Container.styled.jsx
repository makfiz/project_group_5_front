import styled from 'styled-components';

export const ContainerStyled = styled.div`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${p => p.theme.screenSizes.mobile}) {
    max-width: ${p => p.theme.screenSizes.mobile};

    padding-left: 20px;
    padding-right: 20px;
  }

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    max-width: ${p => p.theme.screenSizes.tablet};

    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    max-width: ${p => p.theme.screenSizes.desktop};

    padding-left: 16px;
    padding-right: 16px;
  }
`;
