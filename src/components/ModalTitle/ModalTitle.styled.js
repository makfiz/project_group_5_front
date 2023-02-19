import styled from 'styled-components';

export const StyledTytle = styled.p`
  margin-bottom: 40px;

  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSizes.l};
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.regModalTitleColor};
  text-align: center;

  @media screen and (min-width: 768px) {
    font-weight: ${p => p.theme.fontWeight.medium};
    font-size: ${p => p.theme.fontSizes.ls};
  }
`;
