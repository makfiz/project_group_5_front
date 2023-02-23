import styled from 'styled-components';
import { theme } from '../../../utils/theme';

export const Article = styled.article`
  min-width: 280px;
`;

export const Divider = styled.div`
  width: 200px;
  height: 4px;

  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;
  margin-bottom: 4px;

  @media (min-width: ${theme.screenSizes.tablet}) {
    width: 280px;
  }

  @media (min-width: ${theme.screenSizes.desktop}) {
    width: 340px;
  }
`;

export const ArticleTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;

  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
  max-height: 66px;

  margin-bottom: 16px;
`;

export const ArticleText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  max-height: 176px;

  color: #111321;

  margin-bottom: 20px;

  @media (min-width: ${theme.screenSizes.tablet}) {
    margin-bottom: 40px;
    max-height: 132px;
  }

  @media (min-width: ${theme.screenSizes.desktop}) {
    max-height: 110px;
  }
`;

export const Details = styled.p`
  display: flex;
  justify-content: space-between;
`;

export const ArticleDate = styled.span`
  font-size: 16px;
  line-height: 22px;
  color: rgba(17, 17, 17, 0.6);
`;

export const ReadMoreLink = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-decoration: underline;

  color: #f59256;

  &:hover,
  &:focus,
  &:visited {
    color: #ff6101;
  }
`;

