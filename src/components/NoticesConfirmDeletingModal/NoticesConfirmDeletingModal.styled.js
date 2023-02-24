import styled from 'styled-components';

export const DeleteModalWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  padding: 20px 20px;

  background-color: ${p => p.theme.colors.white};
`;

export const DeleteModalInnerBlock = styled.div`
  width: 100%;
  height: 100%;
  border-bottom-left-radius: ${p => p.theme.radii.large};
  border-bottom-right-radius: ${p => p.theme.radii.large};
  text-align: center;
`;

export const DeleteModalTitle = styled.h3`
  margin-bottom: 10px;
  padding-top: 20px;

  font-size: ${p => p.theme.fontSizes.ms};
  font-weight: ${p => p.theme.fontWeight.bold};
  line-height: 1.36;
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.titleColor};
`;

export const DeleteModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding-top: 6px;
  padding-bottom: 6px;
  background-color: transparent;
  cursor: pointer;

  border: 2px solid ${p => p.theme.colors.hoverGoHome};
  border-radius: ${p => p.theme.radii.large};
  transition: border-color 300ms ease-in-out;

  :last-child {
    margin-top: 10px;

    span {
      margin-right: 10px;
    }
  }

  :hover {
    border-color: ${p => p.theme.colors.deleteBtnColor};

    span {
      color: ${p => p.theme.colors.deleteBtnColor};
    }
  }
`;

export const DeleteModalButtonText = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeight.medium};
  line-height: 1.38;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.hoverGoHome};
  transition: color 300ms ease-in-out;
`;
