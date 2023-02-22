import styled from 'styled-components';

export const FriendTitle = styled.h2`
  text-align: center;
  margin: 0;
  margin-bottom: 12px;
  padding: 0 8px;

  a {
    color: ${props => props.theme.colors.hoverGoHome};
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: ${props => props.theme.fontSizes.xs};
    line-height: 16px;

    :hover {
      color: ${props => props.theme.colors.navAccent};
    }

    @media (min-width: ${props => props.theme.screenSizes.tablet}) {
      font-size: ${props => props.theme.fontSizes.m};
      line-height: 22px;
    }

    @media (min-width: ${props => props.theme.screenSizes.desktop}) {
      font-size: ${props => props.theme.fontSizes.ms};
      line-height: 27px;
    }
  }
`;

export const BoxFriendItem = styled.div`
  display: flex;
  gap: 12px;
  position: relative;
`;

export const BoxFriendLogo = styled.div`
  img {
    max-width: fit-content;

    @media (min-width: ${props => props.theme.screenSizes.tablet}) {
      max-width: 217px;
    }

    @media (min-width: ${props => props.theme.screenSizes.desktop}) {
    }
  }
`;

export const BoxFriendInfo = styled.div`
  padding: 8px;
  @media (min-width: ${props => props.theme.screenSizes.tablet}) {
  }

  @media (min-width: ${props => props.theme.screenSizes.desktop}) {
  }
`;

export const FriendInfoItem = styled.li`
  margin-bottom: 4px;

  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 16px;

  @media (min-width: ${props => props.theme.screenSizes.tablet}) {
    font-size: ${props => props.theme.fontSizes.s};
    line-height: 19px;
  }

  @media (min-width: ${props => props.theme.screenSizes.desktop}) {
    font-size: ${props => props.theme.fontSizes.m};
    line-height: 22px;
  }

  a {
    /* text-decoration: none; */
    color: ${props => props.theme.colors.black};
  }
  :hover {
    cursor: pointer;
    color: ${props => props.theme.colors.hoverGoHome};
    a {
      color: ${props => props.theme.colors.hoverGoHome};
    }
  }
`;
