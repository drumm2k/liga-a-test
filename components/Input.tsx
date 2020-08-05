import styled from 'styled-components';

export const Input = styled.input`
  box-sizing: border-box;
  appearance: none;
  color: ${(p) => p.theme.color.gray800};
  font-size: ${(p) => (p.size ? p.theme.font.size[p.size] : p.theme.font.size.md)};
  width: ${(p) => (p.width ? p.width : '100%')};
  min-height: 3.2rem;
  padding: ${(p) => p.theme.spacing.s3} ${(p) => p.theme.spacing.s5};
  border: none;
  border-radius: ${(p) => p.theme.border.radius200};
  box-shadow: ${(p) => p.theme.input.border};
  outline: none;
  white-space: nowrap;
  transition: box-shadow 0.25s;

  &:focus {
    box-shadow: ${(p) => p.theme.input.border}, ${(p) => p.theme.input.focus};
  }
`;
