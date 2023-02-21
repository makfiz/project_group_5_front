import styled from 'styled-components';

export const Wraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  background-color: #fdf7f2;
  box-shadow: ${p => p.theme.shadows.shadow};
  border-radius: ${p => p.theme.radii.medium};
`;

export const StyledButton = styled.button`
  width: 280px;
  height: 44px;

  background-color: ${p => p.theme.colors.regModalActiveBtn};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.large};
  font-size: ${p => p.theme.fontSizes.l};
  border: none;
  cursor: pointer;

  &:hover {
    border: 2px solid #f59256;
    background-color: transparent;
    color: ${p => p.theme.colors.black};
  }
`;
