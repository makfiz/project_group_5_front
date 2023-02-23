import styled from 'styled-components';

export const BoxModal = styled.div`
  display: block;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const ModalContent = styled.div`
  background-color: ${props => props.theme.colors.white};
  margin: 10% auto;
  padding: 12px;
  position: absolute;
  top: 5%;
  left: 45%;
  border: 1px solid ${props => props.theme.colors.userAddPetBtnBg};
  box-shadow: ${props => props.theme.shadows.hoursWorkModalShadow};
  border-radius: 8px;

  margin-bottom: 4px;

  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 16px;

  @media (min-width: ${props => props.theme.screenSizes.tablet}) {
    left: 40%;
    margin: 5% auto;
  }

  @media (min-width: ${props => props.theme.screenSizes.desktop}) {
    left: 58%;
    top: 7%;
    margin: 5% auto;
  }
`;

export const ModalText = styled.li`
  margin-bottom: 4px;

  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 16px;
`;
