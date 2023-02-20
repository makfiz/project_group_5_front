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

export const EditPhotoLink = styled.a`
  margin-left: auto;
  margin-top: 12px;
  margin-bottom: 34px;
  width: fit-content;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #111111;

  cursor: pointer;

  &:hover {
    color: ${p => p.theme.colors.regModalActiveBtn};
  }
  &:focus {
    color: ${p => p.theme.colors.regModalActiveBtn};
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
`;

export const UserInfoCard = styled.div`
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
`;

export const UserPhotoThumb = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;

  width: 233px;
  height: 233px;
`;
