import styled from 'styled-components';

const size = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1280px',
};

export const SectionTitle = styled.h1`
  margin-top: 42px;
  margin-bottom: 28px;
  text-align: center;

  font-weight: 700;
  font-size: 24px;
  line-height: 33px;

  @media (min-width: ${size.tablet}) {
    font-size: 48px;
    line-height: 66px;

    margin-top: 88px;
    margin-bottom: 40px;
  }

  @media (min-width: ${size.desktop}) {
    margin-top: 60px;
  }

  color: #111111;
`;
