import { Logo } from './Logo/Logo';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

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
import { useSelector, useDispatch } from 'react-redux';
import { UserNav } from './Navigation/UserNav/UserNav';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import ThemeToggle from 'components/ThemeToggle/ThemeToggle';
import { toggleMenu } from 'redux/menu/menuSlice';

export const Header = ({ toggleTheme, theme }) => {
  const dispatch = useDispatch();
  const menuState = useSelector(state => state.menuState.isMenuOpen);

  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  //   const handleMenuClick = {};
  // const isLoggedIn = false;
  useEffect(() => {
    if (menuState) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [menuState]);

  const handleCloseMenu = () => {
    dispatch(toggleMenu());
    // setIsMenuOpen(false);
  };
  const handleOpenMenu = () => {
    // setIsMenuOpen(true);
    dispatch(toggleMenu());
  };

  const handleMenu = () => {
    // setIsMenuOpen(isMenuOpen === false ? true : false);
    dispatch(toggleMenu());
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      {menuState ? (
        <>
          <MenuActive>
            {isLoggedIn ? (
              <>
                <Appbar>
                  <Logo />
                  <BurgerMenu>
                    <OpenMenuIcon onClick={handleMenu}>
                      <IoClose size={40} />
                    </OpenMenuIcon>
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
                  <BurgerMenu>
                    <OpenMenuIcon onClick={handleMenu}>
                      <IoClose size={40} />
                    </OpenMenuIcon>
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
                <ThemeToggle
                  theme={theme}
                  toggleTheme={toggleTheme}
                ></ThemeToggle>
                <HeaderTabRight>
                  <TabAuthWrap>
                    <UserNav onClick={handleCloseMenu} />
                  </TabAuthWrap>
                  <OpenMenuIcon onClick={handleMenu}>
                    <GiHamburgerMenu size={30} />
                  </OpenMenuIcon>
                  {/* <OpenMenuIcon
                    src={openMenuSvg}
                    alt=""
                    onClick={handleOpenMenu}
                  /> */}
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
                <ThemeToggle
                  theme={theme}
                  toggleTheme={toggleTheme}
                ></ThemeToggle>
                <HeaderTabRight>
                  <TabAuthWrap>
                    <AuthNav onClick={handleCloseMenu} />
                  </TabAuthWrap>
                  {/* <OpenMenuIcon
                    src={openMenuSvg}
                    alt=""
                    onClick={handleOpenMenu}
                  /> */}
                  <OpenMenuIcon onClick={handleMenu}>
                    <GiHamburgerMenu size={30} />
                  </OpenMenuIcon>
                </HeaderTabRight>
              </>
            )}
          </MenuNonActive>
        </>
      )}
    </Container>
  );
};
