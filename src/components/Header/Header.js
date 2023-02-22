import { Logo } from './Logo/Logo';
import {
  Container,
  BurgerMenu,
  MenuList,
  Appbar,
  MenuActive,
  MenuNonActive,
  MenuAuthBtnWrap,
  TabAuthWrap,
  HeaderTabRight,
  HeaderDescLeft,
  OpenMenuIcon,
  HeaderDescNav,
} from './Header.styled';
import { useState } from 'react';

import openMenuSvg from '../../assets/menu-icons/open-menu.svg';
import closeMenuSvg from '../../assets/menu-icons/close-menu.svg';
// import { NavLink } from 'react-router-dom';
import { Navigation } from './Navigation/Nav/Nav';
import { AuthNav } from './Navigation/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { UserNav } from './Navigation/UserNav/UserNav';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //   const handleMenuClick = {};
  // const isLoggedIn = false;
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Container>
      {isMenuOpen ? (
        <>
          <MenuActive>
            {isLoggedIn ? (
              <>
                <Appbar>
                  <Logo />
                  <BurgerMenu>
                    <OpenMenuIcon
                      src={closeMenuSvg}
                      alt=""
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                    />
                  </BurgerMenu>
                </Appbar>
                <MenuList>
                  <MenuAuthBtnWrap>
                    <UserNav
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                    />
                  </MenuAuthBtnWrap>
                  <Navigation
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  />
                </MenuList>
              </>
            ) : (
              <>
                <Appbar>
                  <Logo />
                  <BurgerMenu>
                    <OpenMenuIcon
                      src={closeMenuSvg}
                      alt=""
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                    />
                  </BurgerMenu>
                </Appbar>
                <MenuList>
                  <MenuAuthBtnWrap>
                    <AuthNav
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                    />
                  </MenuAuthBtnWrap>
                  <Navigation
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  />
                </MenuList>
              </>
            )}
          </MenuActive>
        </>
      ) : (
        <>
          <MenuNonActive>
            {isLoggedIn ? (
              <>
                <HeaderDescLeft>
                  <Logo />
                  <HeaderDescNav>
                    <Navigation
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                    />
                  </HeaderDescNav>
                </HeaderDescLeft>
                <HeaderTabRight>
                  <TabAuthWrap>
                    <UserNav
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                    />
                  </TabAuthWrap>
                  <OpenMenuIcon
                    src={openMenuSvg}
                    alt=""
                    onClick={() => {
                      setIsMenuOpen(true);
                    }}
                  />
                </HeaderTabRight>
              </>
            ) : (
              <>
                <HeaderDescLeft>
                  <Logo />
                  <HeaderDescNav>
                    <Navigation
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                    />
                  </HeaderDescNav>
                </HeaderDescLeft>
                <HeaderTabRight>
                  <TabAuthWrap>
                    <AuthNav
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                    />
                  </TabAuthWrap>
                  <OpenMenuIcon
                    src={openMenuSvg}
                    alt=""
                    onClick={() => {
                      setIsMenuOpen(true);
                    }}
                  />
                </HeaderTabRight>
              </>
            )}
          </MenuNonActive>
        </>
      )}
    </Container>
  );
};
