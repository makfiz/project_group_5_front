import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 28px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeight.bold};
  line-height: 1.38;
  color: ${p => p.theme.colors.titleColor};
  text-align: center;

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    margin-bottom: 40px;
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;
