import styled from 'styled-components';

// import { TbLogout } from 'react-icon/io';

export const LogoutLink = styled.a`
  margin-left: auto;
  margin-top: 42px;
  width: fit-content;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: rgba(17, 17, 17, 0.6);
  cursor: pointer;

  &:hover {
    color: ${p => p.theme.colors.regModalActiveBtn};
  }
  &:focus {
    color: ${p => p.theme.colors.regModalActiveBtn};
  }
`;

// export const LogoutIcon = styled(TbLogout)`
//   color: ${p => p.theme.colors.regModalActiveBtn};
// `;
