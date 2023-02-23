import styled from 'styled-components';
import bgMob from '../../assets/images/authBg/mobile.png';
import bgMobX from '../../assets/images/authBg/mobile-2x.png';
import bgTab from '../../assets/images/authBg/tablet.png';
import bgTabX from '../../assets/images/authBg/tablet-2x.png';
import bgDesc from '../../assets/images/authBg/desctop.png';
import bgDescX from '../../assets/images/authBg/desctop.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Wraper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bgMob});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: bottom;

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-moz-min-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2/1),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: url(${bgMobX});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${bgTab});

    @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-moz-min-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: url(${bgTabX});
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${bgDesc});

    @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-moz-min-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: url(${bgDescX});
    }
  }
`;
