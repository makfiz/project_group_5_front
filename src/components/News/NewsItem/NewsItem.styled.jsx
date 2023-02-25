import styled from 'styled-components';
import { theme } from '../../../utils/theme';

export const Article = styled.article`
  min-width: 280px;
`;

export const Divider = styled.div`
  width: 200px;
  height: ${props => props.theme.space[2]}px;

  background: linear-gradient(${theme.gradient.newsDecoration});
  border-radius: ${props => props.theme.radii.large};
  margin-bottom: ${props => props.theme.space[2]}px;

  @media (min-width: ${theme.screenSizes.tablet}) {
    width: 280px;
  }

  @media (min-width: ${theme.screenSizes.desktop}) {
    width: 340px;
  }
`;

export const ArticleTitle = styled.h2`
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: 33px;
  letter-spacing: -0.01em;
  
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
  max-height: 66px;

  margin-bottom: ${props => props.theme.space[4]}px;
`;

export const ArticleText = styled.p`
  font-weight: ${props => props.theme.fontWeight.normal};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 22px;
  max-height: 176px;
  text-align: justify;
  
  color: ${props => props.theme.colors.articleText};

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
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 22px;
  color: ${props => props.theme.colors.regModalLinkText};

`;

export const ReadMoreLink = styled.a`
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 22px;
  text-decoration: underline;

  color: ${props => props.theme.colors.hoverGoHome};
  transition: color ${props => props.theme.transition.onHover};

  &:hover,
  &:focus,
  &:visited {
    color: ${props => props.theme.colors.userAddPetBtnBgHover};
  }
`;

