import styled from 'styled-components';

export const ListWrap = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const List = styled.ul`
  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    display: flex;
    flex-wrap: wrap;
    margin: -16px;
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

export const InformationText = styled.p`
  padding: 10px 20px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.lm};
  font-weight: ${p => p.theme.fontWeight.medium};
  line-height: 1.36;
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.titleColor};

  @media screen and (min-width: ${p => p.theme.screenSizes.mobile}) {
    width: 100%;
  }
`;

export const LoaderContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;

export const LoaderWrap = styled.div`
  padding-top: 13px;
  width: 100%;

  @media screen and (min-width: ${p => p.theme.screenSizes.mobile}) {
    width: 280px;
  }

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    padding-top: 28px;
    width: 704px;
  }
  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    width: 1240px;
  }
`;
