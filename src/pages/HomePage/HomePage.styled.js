import styled from 'styled-components';

export const TitleWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 280px;
`;

export const Title = styled.h1`
  margin-top: 60px;
  margin-bottom: 58px;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: 32px;
  line-height: 1.38;
  color: ${p => p.theme.colors.black};
`;
