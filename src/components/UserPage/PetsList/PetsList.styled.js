import styled from 'styled-components';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;

  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    width: ${p => p.theme.screenSizes.tablet};

    padding-left: 32px;
    padding-right: 32px;
  }

  /* @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    width: 100%;
    padding: 60px 32px 24px 32px;
  }  */
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
