import { styled } from 'styled-components';

export const ButtonBase = styled.button`
  width: 100%;
  height: 45px;
  padding: ${({ theme }) => theme.spacing(1)};
  border: none;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
`;
