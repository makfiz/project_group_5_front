import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${p => p.theme.colors.transparent};
  padding-top: 16px;

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    width: 768px;
  }
  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    width: 1280px;
  }
`;

export const BurgerMenu = styled.div`
  display: flex;

  z-index: 999;
  background-color: ${p => p.theme.colors.transparent};
  flex-wrap: wrap;
`;
export const MenuList = styled.div`
  height: 100vh;

  z-index: 999;
  background-color: ${p => p.theme.colors.transparent};

  margin-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    display: none;
  }
`;
export const Appbar = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: flex-end;
`;

export const MenuActive = styled.div`
  display: flex;
  z-index: 999;
  background-color: ${p => p.theme.colors.transparent};
  flex-direction: column;
  padding-top: 16px;
`;
export const MenuNonActive = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 20px;
`;
export const MenuAuthBtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 60px;
  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    /* display: none; */
  }
`;

export const TabAuthWrap = styled.div`
  display: none;
  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    display: flex;
    flex-direction: row;
  }
`;
export const HeaderTabRight = styled.div`
  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    display: flex;
    flex-direction: row;
  }
`;
export const HeaderDescLeft = styled.div`
  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
`;
export const HeaderDescNav = styled.div`
  display: none;
  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
`;

export const OpenMenuIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    margin-left: 25px;
  }
  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    display: none;
  }
`;
