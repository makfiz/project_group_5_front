import styled from 'styled-components';

export const DescriptionText = styled.p`
  :not(:last-child) {
    margin-bottom: 8px;
  }

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeight.medium};
  line-height: 1.38;
  color: ${p => p.theme.colors.titleColor};
`;
