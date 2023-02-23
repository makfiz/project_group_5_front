import styled from 'styled-components';

export const ContainerStyled = styled.div`
  width: 320px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    width: 768px;
  }
  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    width: 1280px;
  }
`;
