import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 0 auto;
  width: 320px;

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    width: 768px;
  }
  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    width: 1280px;
  }
`;

export const BoxFriendsList = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;

  @media (min-width: ${props => props.theme.screenSizes.tablet}) {
    padding: 32px;
    display: block;
  }

  @media (min-width: ${props => props.theme.screenSizes.desktop}) {
    padding: 16px;
  }
`;

export const FriendsList = styled.ul`
  display: grid;
  grid-gap: 12px;

  @media (min-width: ${props => props.theme.screenSizes.tablet}) {
    grid-gap: 32px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media (min-width: ${props => props.theme.screenSizes.desktop}) {
    grid-gap: 32px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

export const FriendsItem = styled.li`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radii.large};
  box-shadow: ${props => props.theme.shadows.inputShadow};

  padding: 12px 4px;
  width: 272px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: ${props => props.theme.screenSizes.tablet}) {
    width: 328px;
    padding: 16px 4px;
  }

  @media (min-width: ${props => props.theme.screenSizes.desktop}) {
    width: 387px;
  }
`;
