import styled from 'styled-components';
import { Link as LinkHome } from 'react-router-dom';

const size = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1280px',
};

export const Container = styled.div`
  width: ${size.mobile};
  margin-left: auto;
  margin-right: auto;
  padding-top: ${p => p.theme.space[7]}px;
  @media screen and (min-width: ${size.tablet}) {
    width: ${size.tablet};
  }
  @media screen and (min-width: ${size.desktop}) {
    width: ${size.desktop};
  }
`;

export const Link = styled(LinkHome)`
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeight.bold};
  color: ${p => p.theme.colors.black};
  :hover {
    color: ${p => p.theme.colors.hoverGoHome};
  }
`;

export const ErrorPageText = styled.p`
  font-size: 100px;
  text-align: center;
  margin-bottom: ${p => p.theme.space[5]}px;

  @media screen and (min-width: ${size.tablet}) {
    font-size: 200px;
  }
  @media screen and (min-width: ${size.desktop}) {
    font-size: 300px;
  }
`;

export const NoticeText = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const DirectionText = styled.p`
  margin-right: ${p => p.theme.space[3]}px;
`;

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
