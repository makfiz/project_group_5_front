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
  background-color: ${({ color = 'rgba(17, 17, 17, 0.6)' }) => color};
  backdrop-filter: ${({ filter }) => (filter ? 'blur(0)' : 'blur(10px)')};
`;

export const StyledModal = styled.div`
  max-width: calc(100vw - 20px);
  max-height: calc(100vh - 20px);
`;
