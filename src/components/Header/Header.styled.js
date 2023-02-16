import styled from 'styled-components';

const size = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1280px',
};
export const Container = styled.div`
  width: 320px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 16px;
  @media (min-width: ${size.tablet}) {
    width: 768px;
  }
  @media (min-width: ${size.desktop}) {
    width: 1280px;
  }
`;

export const BurgerMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const MenuList = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${size.desktop}) {
    display: none;
  }
`;
export const Appbar = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const MenuActive = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MenuNonActive = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  @media (min-width: ${size.tablet}) {
    margin-bottom: 60px;
  }
`;
export const MenuAuthBtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 60px;
  @media (min-width: ${size.tablet}) {
    display: none;
  }
`;

export const TabAuthWrap = styled.div`
  display: none;
  @media (min-width: ${size.tablet}) {
    display: flex;
    flex-direction: row;
  }
`;
export const HeaderTabRight = styled.div`
  @media (min-width: ${size.tablet}) {
    display: flex;
    flex-direction: row;
  }
`;
export const HeaderDescLeft = styled.div`
  @media (min-width: ${size.desktop}) {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
`;
export const HeaderDescNav = styled.div`
  display: none;
  @media (min-width: ${size.desktop}) {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
`;

export const OpenMenuIcon = styled.img`
  @media (min-width: ${size.desktop}) {
    display: none;
  }
`;
