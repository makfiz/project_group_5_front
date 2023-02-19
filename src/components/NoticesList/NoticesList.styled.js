import styled from 'styled-components';

export const ListWrap = styled.div`
  padding: 30px 20px;

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    padding: 60px 32px;
  }

  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    padding: 60px 16px;
  }
`;

export const List = styled.ul`
  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    display: flex;
    flex-wrap: wrap;
    margin: -16px;
  }
  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    max-width: 768px;
  }
  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    max-width: 1280px;
  }
`;
export const ListItem = styled.li`
  @media screen and (max-width: 767px) {
    :not(:last-child) {
      margin-bottom: 32px;
    }
  }

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    margin: 16px;
  }
`;
