import styled from 'styled-components';

import backgroundImageMob from '../../assets/images/background-mob.png';
import portraitMob from '../../assets/images/portrait-mob.png';
import backgroundImageMob2x from '../../assets/images/background-mob-2x.png';
import portraitMob2x from '../../assets/images/portrait-mob-2x.png';
import backgroundImageTab from '../../assets/images/background-tab.png';
import portraitTab from '../../assets/images/portrait-tab.png';
import backgroundImageTab2x from '../../assets/images/background-tab-2x.png';
import portraitTab2x from '../../assets/images/portrait-tab-2x.png';
import backgroundImageDesk from '../../assets/images/background-desk.png';
import portraitDesk from '../../assets/images/portrait-desk.png';
import backgroundImageDesk2x from '../../assets/images/background-desk-2x.png';
import portraitDesk2x from '../../assets/images/portrait-desk-2x.png';
import heartImg from '../../assets/images/heart-desk.png';
import heartImg2x from '../../assets/images/heart-desk-2x.png';

export const PageWrapper = styled.div`
  height: 83vh;
  width: 100vw;

  margin-left: auto;
  margin-right: auto;
  padding-top: 60px;

  background-image: url(${portraitMob}), url(${backgroundImageMob});
  background-repeat: no-repeat, no-repeat;
  background-size: contain, 100% 90%;
  background-position-y: bottom, bottom;
  background-position-x: center, left;

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-moz-min-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2/1),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: url(${portraitMob2x}), url(${backgroundImageMob2x});
  }

  @media screen and (min-width: 465px) and (max-width: 767px) {
    background-size: auto 70vh, 100% 90%;
  }

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    padding-top: 88px;

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
    padding-top: 92px;

    background-image: url(${heartImg}), url(${portraitDesk}),
      url(${backgroundImageDesk});

    background-repeat: no-repeat, no-repeat, no-repeat;

    background-size: 8% auto, 47% auto, contain;

    background-position-y: 14%, bottom, bottom;

    background-position-x: 58%, 98%, 32px;

    @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-moz-min-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: url(${heartImg2x}), url(${portraitDesk2x}),
        url(${backgroundImageDesk2x});
    }
  }
`;

export const Container = styled.div`
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${p => p.theme.screenSizes.mobile}) {
    max-width: ${p => p.theme.screenSizes.mobile};
  }

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    max-width: ${p => p.theme.screenSizes.tablet};
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    max-width: ${p => p.theme.screenSizes.desktop};
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const TitleWrapper = styled.div`
  /* margin-top: 60px; */
  margin-left: auto;
  margin-right: auto;
  max-width: 280px;

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    /* margin-top: 88px; */
    margin-left: 0;
    margin-right: 0;
    max-width: 588px;
  }

  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    margin-top: 0;
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
