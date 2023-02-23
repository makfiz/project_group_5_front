import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    gap: 22px;
  }
`;
