import { Logo } from './Logo/Logo';
import { Container } from '../Container/Container';
import {
  // Container,
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
import { useState, useEffect } from 'react';

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
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };
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
                      onClick={handleCloseMenu}
                    />
                  </BurgerMenu>
                </Appbar>
                <MenuList>
                  <MenuAuthBtnWrap>
                    <UserNav onClick={handleCloseMenu} />
                  </MenuAuthBtnWrap>
                  <Navigation onClick={handleCloseMenu} />
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
                      onClick={handleCloseMenu}
                    />
                  </BurgerMenu>
                </Appbar>
                <MenuList>
                  <MenuAuthBtnWrap>
                    <AuthNav onClick={handleCloseMenu} />
                  </MenuAuthBtnWrap>
                  <Navigation onClick={handleCloseMenu} />
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
                    <Navigation onClick={handleCloseMenu} />
                  </HeaderDescNav>
                </HeaderDescLeft>
                <HeaderTabRight>
                  <TabAuthWrap>
                    <UserNav onClick={handleCloseMenu} />
                  </TabAuthWrap>
                  <OpenMenuIcon
                    src={openMenuSvg}
                    alt=""
                    onClick={handleOpenMenu}
                  />
                </HeaderTabRight>
              </>
            ) : (
              <>
                <HeaderDescLeft>
                  <Logo />
                  <HeaderDescNav>
                    <Navigation onClick={handleCloseMenu} />
                  </HeaderDescNav>
                </HeaderDescLeft>
                <HeaderTabRight>
                  <TabAuthWrap>
                    <AuthNav onClick={handleCloseMenu} />
                  </TabAuthWrap>
                  <OpenMenuIcon
                    src={openMenuSvg}
                    alt=""
                    onClick={handleOpenMenu}
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
