import styled from 'styled-components';

export const SearchBarWrap = styled.div`
  padding: 42px 20px 28px;

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    padding-top: 88px;
    padding-bottom: 40px;
  }
  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    padding-top: 59px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 28px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeight.bold};
  line-height: 1.38;
  color: ${p => p.theme.colors.titleColor};
  text-align: center;

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    margin-bottom: 40px;
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InputLabel = styled.label`
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 200px;

  @media screen and (min-width: ${p => p.theme.screenSizes.mobile}) {
    width: 280px;
  }
  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    width: 608px;
  }
`;

export const SearchField = styled.input`
  //TODO: Delete box sizing
  box-sizing: border-box;
  display: block;
  padding: 8px 11px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.inputShadow};
  border-radius: ${p => p.theme.radii.medium};
  width: 200px;

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeight.medium};
  line-height: 1.38;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.placeholderColor};
  outline: none;
  border: 1px solid transparent;
  transition: border-color 300ms ease-in-out;

  :focus {
    border-color: ${p => p.theme.colors.hoverGoHome};
  }

  @media screen and (min-width: ${p => p.theme.screenSizes.mobile}) {
    width: 280px;
  }
  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    padding: 7px 12px 8px 19px;
    border-radius: ${p => p.theme.radii.large};
    width: 608px;

    font-size: ${p => p.theme.fontSizes.ms};
    line-height: 1.35;
  }
`;

export const SearchBtn = styled.button`
  width: 20px;
  height: 20px;

  position: absolute;
  top: 10px;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: ${p => p.theme.radii.round};
  cursor: pointer;

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    width: 24px;
    height: 24px;
  }
`;
