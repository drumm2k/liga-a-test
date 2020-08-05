import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${(p) => p.theme.font.size.md};

  input[type='text'] {
    margin-left: ${(p) => p.theme.spacing.s4};
  }
`;
