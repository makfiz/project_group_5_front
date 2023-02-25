import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0rem;
  left: 0rem;
  width: 105vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.backdropModal};
  backdrop-filter: blur(10px);
  overflow-y: scroll;
  z-index: 11;
`;

export const StyledModal = styled.div`
  max-width: calc(100vw - 20px);
  max-height: calc(100vh - 20px);
`;
