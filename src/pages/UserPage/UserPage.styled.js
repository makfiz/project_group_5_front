import styled from 'styled-components';

export const MainWrapper = styled.div`
  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    display: flex;
  }
`;

export const SecondaryWrapper = styled.div`
  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    display: flex;
    flex-shrink: 0;
    flex-direction: column;

    width: 821px;
  }
`;
