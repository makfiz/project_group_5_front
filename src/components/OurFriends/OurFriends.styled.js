import styled from 'styled-components';

export const BoxFriendsList = styled.div`
  /* border: 1px red solid; */
  padding: 16px;
`;

export const FriendsList = styled.ul`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

export const FriendsItem = styled.li`
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  padding: 16px 4px;

  width: auto;
  /* width: 395px; */
  /* height: 287px; */
`;

export const FriendTitle = styled.h2`
  text-align: center;
  margin: 0;
  padding: 0;
  padding-bottom: 16px;
  a {
    color: ${props => props.theme.colors.hoverGoHome};
    font-size: 20px;
    font-weight: ${props => props.theme.fontWeight.bold};
    :hover {
      /* hover */
      color: ${props => props.theme.colors.navAccent};
    }
  }
`;

export const BoxFriendItem = styled.div`
  /* border: 1px blue solid; */
  display: flex;
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
  margin-bottom: 12px;

  /* font-family: 'Manrope'; */
  font-style: normal;
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 22px;
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
