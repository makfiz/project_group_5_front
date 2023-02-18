import styled from 'styled-components';

const size = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1280px',
};

export const ArticleList = styled.ul`
  margin-bottom: -40px;
  padding-left: 32px;
  padding-right: 32px;

  @media (min-width: ${size.tablet}) {
    display: grid;
    grid-template-columns: 335px 335px;
    column-gap: 32px;
  }

  @media (min-width: ${size.desktop}) {
    display: grid;
    grid-template-columns: 395px 395px 395px;
  }
`;
