import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(17, 17, 17, 0.6);

  backdrop-filter: blur(10px);
`;

export const StyledModal = styled.div`
  overflow: auto;
  width: 280px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* max-height: 100%; */
  max-height: 95%;
  border-radius: 20px;
  background-color: #ffffff;
  &::-webkit-scrollbar {
    width: 0;
  }
  @media screen and (min-width: 768px) {
    min-width: 608px;
    width: auto;
    border-radius: 40px;
  }
`;
