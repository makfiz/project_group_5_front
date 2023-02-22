import styled from 'styled-components';

export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;

  background-color: ${p => p.theme.colors.transparent};
  border-radius: ${p => p.theme.radii.medium};

  @media screen and (min-width: 768px) {
    background-color: ${p => p.theme.colors.white};
    width: 608px;
  }
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

export const Title = styled.p`
  margin-bottom: 40px;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSizes.l};
  text-align: center;
  text-transform: uppercase;
`;
