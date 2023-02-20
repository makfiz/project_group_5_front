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
  padding-bottom: 100px;

  position: relative;

  @media (min-width: ${size.tablet}) {
    display: grid;
    grid-template-columns: 335px 335px;
    column-gap: 32px;
    margin-bottom: -60px;

  }

  @media (min-width: ${size.desktop}) {
    display: grid;
    grid-template-columns: 395px 395px 395px;
    padding-bottom: 200px;
  }

    &:empty::before {
        content: '...Sorry, no news was found.';
        display: block;
        text-align: center;
        font-weight:400;
        font-size: 18px;
        
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%)
    }
`;
