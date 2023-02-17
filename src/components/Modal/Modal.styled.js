import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
`;

export const StyledModal = styled.div`
  background-color: ${p => p.theme.colors.white};
  border-radius: 40px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
