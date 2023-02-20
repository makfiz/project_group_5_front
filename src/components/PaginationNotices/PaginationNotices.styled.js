import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const PaginationWrap = styled.div`
  padding: 20px 20px;
  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    padding: 20px 32px;
  }
  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    padding: 20px 16px;
  }
`;

export const Pagination = styled(ReactPaginate)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    margin: -5px;
    max-width: 768px;
  }
  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    max-width: 1280px;
  }

  li {
    margin: 5px;
  }

  li a {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    padding: 6px;
    background-color: ${p => p.theme.colors.white};
    border: 1px solid ${p => p.theme.colors.hoverGoHome};
    border-radius: ${p => p.theme.radii.normal};
    cursor: pointer;

    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeight.medium};
    color: ${p => p.theme.colors.titleColor};
    transition: background-color 300ms ease-in;

    @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
      padding: 8px;
    }

    @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
      padding: 10px;
      font-size: ${p => p.theme.fontSizes.ms};
    }
  }

  li.selected a {
    background-color: ${p => p.theme.colors.hoverGoHome};
    color: ${p => p.theme.colors.white};
  }

  li.disable,
  li.disabled a {
    cursor: default;
    background-color: ${p => p.theme.colors.grey};
    border: none;
  }

  li:hover:not(.selected):not(.disabled) a {
    background-color: ${p => p.theme.colors.deleteBtnColor};
    color: ${p => p.theme.colors.white};
  }
`;
