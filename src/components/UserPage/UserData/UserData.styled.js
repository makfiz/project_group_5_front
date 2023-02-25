import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 60px;
  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    width: 768px;
  }
  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    width: 1280px;
  }
`;

export const UserPageHeader = styled.h2`
  display: block;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;

  margin-bottom: 18px;

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    font-size: 28px;
    line-height: 38px;
    margin-bottom: 40px;
    margin-left: 32px;
  }
`;

export const UserInfoCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin-left: auto;
  margin-right: auto;

  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;

  max-width: 280px;
  padding-top: 20px;
  padding-right: 12px;
  padding-bottom: 20px;
  padding-left: 16px;

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    max-width: 736px;
    height: 311px;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    border-top-left-radius: 0;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 20px;
  }
  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    margin-left: 0px;
    max-width: 411px;
    height: 541px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
  }
`;

export const UserPhotoThumb = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;

  width: 233px;
  height: 233px;

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    position: absolute;
    top: 24px;
    right: 40px;
  }

  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    top: 20px;
    right: 89px;
  }
`;

export const UserDataWrapper = styled.div`
  margin-top: 70px;
  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    margin-top: 44px;
    margin-left: 32px;
    max-width: 380px;
  }
  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    position: absolute;
    top: 289px;
    left: 16px;

    margin-top: 0px;
    margin-left: 0px;
    max-width: 380px;
  }
`;
