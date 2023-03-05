import styled from 'styled-components';

import portraitMob from 'assets/images/homePage/portrait-mob.png';
import portraitMob2x from 'assets/images/homePage/portrait-mob-2x.png';
import bgMob from 'assets/images/homePage/bg-mob.svg';

import portraitTab from 'assets/images/homePage/portrait-tab.png';
import portraitTab2x from 'assets/images/homePage/portrait-tab-2x.png';
import backgroundImageTab from 'assets/images/homePage/background-tab.png';
import backgroundImageTab2x from 'assets/images/homePage/background-tab-2x.png';

import bgDesk from 'assets/images/homePage/bg-desk.svg';
import bgDeskP2 from 'assets/images/homePage/bg-desk-part2.svg';
import bgDeskHeart from 'assets/images/homePage/heart.svg';

export const PageWrapper = styled.div`
  height: 89vh;
  width: 100%;

  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;

  background-image: url(${portraitMob}), url(${bgMob});
  background-repeat: no-repeat, no-repeat;
  background-size: contain, 100%;
  background-position-y: bottom, bottom;
  background-position-x: center, left;
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-moz-min-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2/1),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: url(${portraitMob2x}), url(${bgMob});
  }

  @media screen and (min-width: 465px) and (max-width: 767px) {
    background-size: auto 70vh, 100% 98%;
  }

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    background-image: url(${portraitTab}), url(${backgroundImageTab});
    background-size: auto 55vh, 100% 85%;
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-moz-min-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: url(${portraitTab2x}), url(${backgroundImageTab2x});
    }
  }

  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    height: 100%;
    width: 1380px;

    padding-top: 60px;

    background-image: url(${bgDesk}), url(${bgDeskP2}), url(${bgDeskHeart});
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: bottom left, bottom right, top 75px left 735px;
    background-size: auto 413px, auto 413px, 92px 89px;

    overflow-y: auto;
  }
`;

export const Box = styled.div`
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    width: ${p => p.theme.screenSizes.tablet};
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    display: flex;
    justify-content: space-between;

    width: ${p => p.theme.screenSizes.desktop};
  }
`;

export const TitleWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 280px;

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    margin-left: 0;
    margin-right: 0;
    max-width: 588px;
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: 32px;
  line-height: 1.38;
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    font-size: 68px;
    line-height: 1.47;
  }
`;

export const DesktopImage = styled.img`
  display: none;

  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    display: block;
    height: 82.9vh;
  }
`;
