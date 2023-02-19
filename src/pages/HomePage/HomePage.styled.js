import styled from 'styled-components';

import backgroundImageMob from '../../assets/images/background-mob.png';
import portraitMob from '../../assets/images/portrait-mob.png';
import backgroundImageMob2x from '../../assets/images/background-mob-2x.png';
import portraitMob2x from '../../assets/images/portrait-mob-2x.png';

export const PageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  margin-left: auto;
  margin-right: auto;
  background-image: url(${portraitMob}), url(${backgroundImageMob});
  background-repeat: no-repeat, no-repeat;
  background-size: contain, cover;
  background-position-y: bottom, bottom;
  background-position-x: center, center;

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-moz-min-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2/1),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: url(${portraitMob2x}), url(${backgroundImageMob2x});
  }

  @media screen and (min-width: 500px) and (max-width: 767px) {
    width: 500px;
  }
`;

export const TitleWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 280px;
`;

export const Title = styled.h1`
  margin-top: 60px;
  margin-bottom: 58px;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: 32px;
  line-height: 1.38;
  color: ${p => p.theme.colors.black};
`;
