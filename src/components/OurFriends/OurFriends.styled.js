import styled from 'styled-components';

const size = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1280px',
};

export const BoxFriendsList = styled.div`
  /* border: 1px red solid; */
  display: flex;
  justify-content: space-around;
  /* margin: 0 auto; */
  @media screen and (min-width: 320px) {
    padding: 20px;
  }

  @media screen and (min-width: 768px) {
    padding: 32px;

    display: block;
  }

  @media screen and (min-width: 1280px) {
    padding: 16px;
  }
`;

export const FriendsList = styled.ul`
  display: grid;

  @media screen and (min-width: 320px) {
    grid-gap: 12px;
  }

  /* width: 280px; */
  /* grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr); */

  @media screen and (min-width: 768px) {
    /* width: 768px; */
    /* width: 704px; */
    grid-gap: 32px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media screen and (min-width: 1280px) {
    /* width: 1248px; */
    grid-gap: 32px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

export const FriendsItem = styled.li`
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

  width: 280px;
  padding: 12px;
  /* width: 395px; */
  /* height: 287px; */

  @media (min-width: ${size.tablet}) {
    width: auto;
    /* width: calc(90vw / 2); */
  }

  @media (min-width: ${size.desktop}) {
    /* width: 395px; */
    padding: 16px 4px;
  }
`;

export const FriendTitle = styled.h2`
  text-align: center;
  margin: 0;
  padding: 0;
  padding-bottom: 16px;

  a {
    color: ${props => props.theme.colors.hoverGoHome};
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: 12px;
    line-height: 16px;

    :hover {
      color: ${props => props.theme.colors.navAccent};
    }

    @media (min-width: ${size.tablet}) {
      font-size: ${props => props.theme.fontSizes.m};
      line-height: 22px;
    }

    @media (min-width: ${size.tablet}) {
      font-size: 20px;
      line-height: 27px;
    }
  }
`;

export const BoxFriendItem = styled.div`
  /* border: 1px blue solid; */
  display: flex;
  position: relative;
`;

export const BoxFriendLogo = styled.div`
  img {
    /* ?  */
    /* max-width: 158px; */
    /* width: 158px; */
  }
`;

export const BoxFriendInfo = styled.div`
  margin-left: 16px;
`;

//FriendInfoList

export const FriendInfoItem = styled.li`
  margin-bottom: 4px;

  /* font-family: 'Manrope'; */
  /* font-style: normal; */
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: 12px;
  line-height: 16px;

  @media (min-width: ${size.tablet}) {
    margin-bottom: 8px;

    font-size: ${props => props.theme.fontSizes.s};
    line-height: 19px;
  }

  @media (min-width: ${size.desktop}) {
    margin-bottom: 12px;

    font-size: ${props => props.theme.fontSizes.m};
    line-height: 22px;
  }

  a {
    /* скидання стилів */
    text-decoration: none;
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

export const BoxModal = styled.div`
  display: block;
  /* position: fixed; */
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const ModalContent = styled.div`
  background-color: ${props => props.theme.colors.white};
  margin: 10% auto;
  padding: 12px;
  width: 120px;
  position: absolute;
  top: 5%;
  left: 50%;
  border: 1px solid ${props => props.theme.colors.hoverGoHome};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  margin-bottom: 4px;

  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: 12px;
  line-height: 16px;

  @media (min-width: ${size.tablet}) {
    left: 40%;
    margin: 5% auto;
  }

  @media (min-width: ${size.desktop}) {
    left: 58%;
    top: 7%;
    margin: 5% auto;
  }
`;

export const ModalText = styled.li`
  margin-bottom: 4px;

  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: 12px;
  line-height: 16px;
`;
